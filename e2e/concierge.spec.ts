import { test, expect } from '@playwright/test';

test.describe('AI Sales Concierge', () => {
  test('book-demo page loads with concierge UI', async ({ page }) => {
    await page.goto('/book-demo');
    await expect(page.getByRole('heading', { name: /AI Sales Concierge/i })).toBeVisible();
    await expect(page.getByRole('log')).toBeVisible();
    await expect(page.getByRole('textbox', { name: /message input/i })).toBeVisible();
  });

  test('sends a message and receives a streamed response', async ({ page }) => {
    await page.goto('/book-demo');

    const input = page.getByRole('textbox', { name: /message input/i });
    await input.fill('Hello, tell me about Houdiny');
    await input.press('Enter');

    // The chat log is the aria-live region — scope to it to avoid
    // collisions with static "Houdiny AI" text in the page header.
    const chatLog = page.getByRole('log');

    // Mock response always contains "B2B teams" — unique to the streamed reply
    await expect(chatLog.getByText(/B2B teams/i)).toBeVisible({ timeout: 10000 });
  });

  test('user message appears in chat log', async ({ page }) => {
    await page.goto('/book-demo');

    const input = page.getByRole('textbox', { name: /message input/i });
    await input.fill('What is the pricing?');
    await input.press('Enter');

    const chatLog = page.getByRole('log');
    await expect(chatLog.getByText(/What is the pricing/i)).toBeVisible({ timeout: 5000 });
  });

  test('mock response mentions free trial for pricing question', async ({ page }) => {
    await page.goto('/book-demo');

    const input = page.getByRole('textbox', { name: /message input/i });
    await input.fill('how much does it cost?');
    await input.press('Enter');

    const chatLog = page.getByRole('log');
    await expect(chatLog.getByText(/free trial/i)).toBeVisible({ timeout: 10000 });
  });

  test('input clears after sending', async ({ page }) => {
    await page.goto('/book-demo');

    const input = page.getByRole('textbox', { name: /message input/i });
    await input.fill('Hello there');
    await input.press('Enter');

    await expect(input).toHaveValue('', { timeout: 3000 });
  });

  test('/leads page loads (empty state)', async ({ page }) => {
    await page.goto('/leads');
    await expect(page.getByText(/Sales Follow-Up Queue/i)).toBeVisible();
    await expect(page.getByText(/Demo Store/i)).toBeVisible();
  });

  test('/leads shows CTA to concierge when empty', async ({ page }) => {
    await page.goto('/leads');
    const cta = page.getByRole('link', { name: /Try the AI Concierge/i });
    await expect(cta).toBeVisible();
    await cta.click();
    await expect(page).toHaveURL('/book-demo');
  });
});
