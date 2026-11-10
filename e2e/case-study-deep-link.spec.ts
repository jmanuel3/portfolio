import { expect, test } from '@playwright/test';

const CASE_STUDY_ID = 'ndl-capital-group-case-study';

test.describe('case study deep link', () => {
  test('stays closed when the URL has no fragment', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator(`#${CASE_STUDY_ID}`)).not.toHaveAttribute('open');
  });

  test('opens and scrolls to the case study targeted on load', async ({
    page,
  }) => {
    await page.goto(`/#${CASE_STUDY_ID}`);

    const caseStudy = page.locator(`#${CASE_STUDY_ID}`);
    await expect(caseStudy).toHaveAttribute('open', '');
    await expect(
      caseStudy.getByRole('heading', { name: 'Outcome' }),
    ).toBeInViewport();
  });

  test('opens the case study when the fragment changes later', async ({
    page,
  }) => {
    await page.goto('/');
    await page.evaluate((id) => {
      window.location.hash = id;
    }, CASE_STUDY_ID);

    await expect(page.locator(`#${CASE_STUDY_ID}`)).toHaveAttribute('open', '');
  });
});
