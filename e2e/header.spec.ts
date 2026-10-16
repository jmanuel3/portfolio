import { expect, test } from '@playwright/test';
import { site } from '../src/content/site';

test.beforeEach(async ({ page }) => {
  // Instant scroll: assertions measure the final position, not a mid-animation one
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
});

test('links the logo back to the top of the page', async ({ page }) => {
  const logo = page
    .getByRole('banner')
    .getByRole('link', { name: `${site.name}, back to top` });

  await expect(logo).toHaveAttribute('href', '#top');
  await expect(page.locator('#top')).toHaveCount(1);
});

test('keeps anchored sections clear of the sticky header', async ({ page }) => {
  const header = page.getByRole('banner');
  const links = page
    .getByRole('navigation', { name: 'Main' })
    .getByRole('link');

  for (const link of await links.all()) {
    const target = await link.getAttribute('href');
    await link.click();

    const heading = page.locator(`${target} h2`);
    await expect(heading).toBeInViewport();

    const headerBox = await header.boundingBox();
    const headingBox = await heading.boundingBox();
    expect(headingBox!.y).toBeGreaterThanOrEqual(
      headerBox!.y + headerBox!.height,
    );
  }
});
