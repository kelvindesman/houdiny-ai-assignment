import { test, expect } from '@playwright/test';

test.describe('Coming Soon nav behavior', () => {
  test('Pricing nav item shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-pricing').click();
    await expect(page.getByRole('status')).toBeVisible();
    await expect(page.getByText(/coming soon/i)).toBeVisible();
  });

  test('Login button shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-login').click();
    await expect(page.getByRole('status')).toBeVisible();
  });

  test('Start For Free shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-start').click();
    await expect(page.getByRole('status')).toBeVisible();
  });

  test('Schedule Demo in hero routes to /book-demo', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('hero-cta-demo').click();
    await expect(page).toHaveURL('/book-demo');
  });

  test('Features dropdown item shows coming soon toast', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-group-features').click();
    await page.getByTestId('nav-item-ai-copywriting-agent').click();
    await expect(page.getByRole('status')).toBeVisible();
    await expect(page.getByText(/coming soon/i)).toBeVisible();
  });
});
