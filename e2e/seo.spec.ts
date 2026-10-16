import { expect, test } from '@playwright/test';

test('declares social preview metadata', async ({ page }) => {
  await page.goto('/');

  for (const property of ['og:title', 'og:description', 'og:image', 'og:url']) {
    await expect(page.locator(`meta[property="${property}"]`)).toHaveAttribute(
      'content',
      /.+/,
    );
  }
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /^https:\/\//,
  );
});

// A missing static file falls back to index.html with a 200 status, so checking
// only the status would pass anyway: the content type proves the real file is served
for (const path of [
  '/robots.txt',
  '/sitemap.xml',
  '/favicon.ico',
  '/og-image.png',
]) {
  test(`serves ${path} as a real file`, async ({ request }) => {
    const response = await request.get(path);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).not.toContain('text/html');
  });
}
