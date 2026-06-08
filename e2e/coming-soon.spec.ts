import { test, expect, type Page } from '@playwright/test';

async function clickNav(page: Page, testId: string) {
  await page.evaluate((id) => {
    const el = document.querySelector(`[data-testid="${id}"]`) as HTMLElement;
    el?.click();
  }, testId);
}

test.describe('Coming Soon nav behavior', () => {
  test('Pricing nav item shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await clickNav(page, 'nav-pricing');
    await expect(page.getByRole('status')).toBeVisible();
    await expect(page.getByText(/coming soon/i)).toBeVisible();
  });

  test('Login button shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await clickNav(page, 'nav-login');
    await expect(page.getByRole('status')).toBeVisible();
  });

  test('Start For Free shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await clickNav(page, 'nav-start');
    await expect(page.getByRole('status')).toBeVisible();
  });

  test('Schedule Demo in hero routes to /book-demo', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('hero-cta-demo').click();
    await expect(page).toHaveURL('/book-demo');
  });

  test('Features dropdown item shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await clickNav(page, 'nav-group-features');
    await clickNav(page, 'nav-item-ai-copywriting-agent');
    await expect(page.getByRole('status')).toBeVisible();
    await expect(page.getByText(/coming soon/i)).toBeVisible();
  });
});
