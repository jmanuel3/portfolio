import { expect, test } from '@playwright/test';
import { site } from '../src/content/site';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('offers an email call to action in the contact section', async ({
  page,
}) => {
  const contact = page.getByRole('region', { name: 'Got a project in mind?' });
  await expect(contact.getByRole('link', { name: 'Email me' })).toHaveAttribute(
    'href',
    `mailto:${site.email}`,
  );
});

test('shows the current year and links to the source in the footer', async ({
  page,
}) => {
  const footer = page.getByRole('contentinfo');
  await expect(footer).toContainText(`© ${new Date().getFullYear()}`);
  await expect(
    footer.getByRole('link', { name: /View source/ }),
  ).toHaveAttribute('href', site.links.repo);
});

test('tracks the pointer for the card spotlight', async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, 'The spotlight is a hover-only effect');

  const card = page.locator('#contact .spotlight');
  await card.hover();

  await expect
    .poll(() => card.evaluate((el) => el.style.getPropertyValue('--pointer-x')))
    .toMatch(/px$/);
});
