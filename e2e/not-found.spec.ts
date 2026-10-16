import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Same reason as page.spec: audit the final state, not a half-faded one
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/404.html');
});

test('keeps the page out of search indexes', async ({ page }) => {
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex',
  );
});

test('leads the user back to the home page', async ({ page }) => {
  await expect(
    page.getByRole('heading', { level: 1, name: /Page not found/ }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Back to home' }).click();
  await expect(page).toHaveURL('/');
});

test('has no detectable accessibility violations', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
