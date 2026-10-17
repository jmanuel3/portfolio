import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const hero = (page: Page) => page.locator('.hero-field');

// Reports the given WebGL renderer, so each test controls GPU vs software rendering
const reportRenderer = (page: Page, renderer: string) =>
  page.addInitScript((name) => {
    const UNMASKED_RENDERER_WEBGL = 0x9246;
    const getParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function (
      parameter: number,
    ) {
      return parameter === UNMASKED_RENDERER_WEBGL
        ? name
        : getParameter.call(this, parameter);
    };
  }, renderer);

test.describe('with reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('shows the static, decorative pose and never loads the video', async ({
    page,
  }) => {
    await page.goto('/');
    const mascot = page.locator('#top img');
    await expect(mascot).toHaveCount(1);
    await expect(mascot).toBeVisible();
    await expect(mascot).toHaveAttribute('alt', '');
    await expect(page.locator('video')).toHaveCount(0);
  });
});

test.describe('with motion', () => {
  test.use({ reducedMotion: 'no-preference' });

  test.beforeEach(async ({ page }) => {
    // CI renders WebGL in software, where the run is skipped: test a GPU device
    await reportRenderer(page, 'Test GPU');
    await page.goto('/');
  });

  test('runs once, slides the field and rests on the final pose', async ({
    page,
  }) => {
    await expect(hero(page)).toHaveAttribute('data-run', 'running');
    await expect(hero(page)).toHaveAttribute('data-run', 'done', {
      timeout: 10_000,
    });

    await expect(page.locator('.mascot-final')).toBeVisible();
    await expect(page.locator('.mascot-final')).toHaveAttribute('alt', '');
    const shift = await page
      .locator('.field-markings')
      .evaluate((element) => getComputedStyle(element).translate);
    expect(shift).not.toBe('none');
  });

  test('replays the run from an accessible button', async ({ page }) => {
    await expect(hero(page)).toHaveAttribute('data-run', 'done', {
      timeout: 10_000,
    });
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);

    await page.getByRole('button', { name: 'Replay the mascot run' }).click();
    await expect(hero(page)).toHaveAttribute('data-run', 'running');
    await expect(hero(page)).toHaveAttribute('data-run', 'done', {
      timeout: 10_000,
    });
  });
});

test('keeps the static pose when WebGL runs in software', async ({ page }) => {
  // Lighthouse and CI render WebGL without a GPU: the run must not start there
  await reportRenderer(page, 'ANGLE (SwiftShader Device)');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(page.locator('#top img')).toHaveCount(1);
  await expect(page.locator('video')).toHaveCount(0);
});
