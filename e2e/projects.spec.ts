import { expect, test, type Page } from '@playwright/test';
import { projects } from '../src/features/projects/projects.data';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('renders a card for every project', async ({ page }) => {
  const section = page.getByRole('region', { name: 'Projects' });
  await expect(section).toBeVisible();

  // Derived from the data source, so adding a project needs no test change
  for (const project of projects) {
    await expect(
      section.getByRole('heading', { level: 3, name: project.name }),
    ).toBeVisible();
  }
});

test('opens every external link safely in a new tab', async ({ page }) => {
  const externalLinks = page.locator('a[target="_blank"]');
  await expect(externalLinks.first()).toBeVisible();

  for (const link of await externalLinks.all()) {
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
});

test('shows a decorative screenshot of every project', async ({ page }) => {
  const screenshots = page
    .getByRole('region', { name: 'Projects' })
    .locator('article img');
  await expect(screenshots).toHaveCount(projects.length);

  for (const screenshot of await screenshots.all()) {
    await expect(screenshot).toHaveAttribute('alt', '');
  }
});

const hoverFirstCard = async (page: Page) => {
  const card = page.locator('.project-card').first();
  await card.hover();
  // The computed translate follows the transition frame by frame
  return () =>
    card.locator('img').evaluate((img) => getComputedStyle(img).translate);
};

test.describe('on hover', () => {
  test.skip(({ isMobile }) => isMobile, 'Touch screens have no hover');

  test('scrolls through the screenshot', async ({ page }) => {
    const translate = await hoverFirstCard(page);
    await expect.poll(translate).not.toBe('none');
  });

  test.describe('with reduced motion', () => {
    test.use({ reducedMotion: 'reduce' });

    test('keeps the screenshot still', async ({ page }) => {
      const translate = await hoverFirstCard(page);
      // Proving that nothing moves needs a wait longer than the scroll's first frames
      await page.waitForTimeout(300);
      expect(await translate()).toBe('none');
    });
  });
});

test('keeps case studies collapsed until the visitor opens them', async ({
  page,
}) => {
  const withCaseStudy = projects.filter((project) => project.caseStudy);
  expect(withCaseStudy.length).toBeGreaterThan(0);

  for (const project of withCaseStudy) {
    const card = page.locator('.project-card', {
      has: page.getByRole('heading', { level: 3, name: project.name }),
    });
    const decisions = card.getByRole('heading', { name: 'Key decisions' });

    await expect(decisions).toBeHidden();
    await card.getByText('How I built it').click();
    await expect(decisions).toBeVisible();
  }
});
