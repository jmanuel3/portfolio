import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Entrance animations start at opacity 0; reduced motion renders the final
  // state immediately, so the audit never measures half-faded text
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
});

test('has no horizontal overflow', async ({ page }) => {
  const hasOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

test('has no detectable accessibility violations', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
