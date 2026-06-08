import { test, expect } from '@playwright/test';

test.describe('Landing page', () => {
  test('renders the main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByText(/easiest way to run/i)).toBeVisible();
  });

  test('renders the header logo', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/houdiny/i).first()).toBeVisible();
  });

  test('renders Schedule Demo CTA in hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('hero-cta-demo')).toBeVisible();
  });

  test('renders the checklist', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/7-Days Free Trial/i)).toBeVisible();
    await expect(page.getByText(/100 free Leads/i)).toBeVisible();
    await expect(page.getByText(/No credit card required/i)).toBeVisible();
  });

  test('mobile: hamburger toggles mobile nav', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only test');
    await page.goto('/');
    const hamburger = page.getByTestId('hamburger');
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await expect(page.getByTestId('mobile-nav')).toBeVisible();
    await hamburger.click();
    await expect(page.getByTestId('mobile-nav')).not.toBeVisible();
  });
});
