import { expect, test } from '@playwright/test';
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
