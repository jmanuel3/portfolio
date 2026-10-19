import { expect, test } from '@playwright/test';
import { site } from '../src/content/site';

test('offers the CV as a download in the hero, About and contact sections', async ({
  page,
}) => {
  await page.goto('/');
  const links = page.getByRole('link', { name: 'Download CV (PDF)' });
  await expect(links).toHaveCount(3);

  for (const link of await links.all()) {
    await expect(link).toHaveAttribute('href', site.cv);
    await expect(link).toHaveAttribute('download');
  }
});

// A missing file would fall back to index.html with a 200, so check the type
test('serves the CV as a PDF', async ({ request }) => {
  const response = await request.get(site.cv);
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/pdf');
});
