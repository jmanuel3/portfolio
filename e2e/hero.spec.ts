import { expect, test } from '@playwright/test';
import { site } from '../src/content/site';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Fails if there is more than one h1, since the locator must be unique
test('shows the name as the single page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(site.name);
});

test('scrolls to the projects section', async ({ page }) => {
  await page.getByRole('link', { name: 'View projects' }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole('region', { name: 'Projects' })).toBeInViewport();
});

test('offers an email contact link', async ({ page }) => {
  await expect(
    page.getByRole('link', { name: 'Get in touch' }),
  ).toHaveAttribute('href', `mailto:${site.email}`);
});

test('shows the mascot as a decorative image', async ({ page }) => {
  const mascot = page.locator('#top img');
  await expect(mascot).toBeVisible();
  await expect(mascot).toHaveAttribute('alt', '');
});
