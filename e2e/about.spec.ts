import { expect, test } from '@playwright/test';

test('introduces the person behind the work', async ({ page }) => {
  await page.goto('/');
  const about = page.getByRole('region', { name: 'About' });

  await expect(
    about.getByRole('heading', { level: 3, name: "Hi, I'm Jose" }),
  ).toBeVisible();
  // The portrait carries meaning, so it needs a real description
  await expect(about.getByRole('img')).toHaveAttribute('alt', /\w+/);
});
