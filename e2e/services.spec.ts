import { expect, test } from '@playwright/test';
import { services } from '../src/features/services/services.data';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('renders a card for every service', async ({ page }) => {
  const section = page.getByRole('region', { name: 'Services' });

  for (const service of services) {
    await expect(
      section.getByRole('heading', { level: 3, name: service.title }),
    ).toBeVisible();
  }
});

test('treats mascot illustrations as decorative', async ({ page }) => {
  const images = page.getByRole('region', { name: 'Services' }).locator('img');

  await expect(images).toHaveCount(services.length);
  for (const image of await images.all()) {
    await expect(image).toHaveAttribute('alt', '');
  }
});
