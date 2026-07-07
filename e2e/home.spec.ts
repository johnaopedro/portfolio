import { test, expect } from '@playwright/test';

test('has title and sections', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/João Pedro | Portfólio/);

  // Check if hero section text exists
  await expect(page.locator('text=Estudante de Engenharia de Software na UnB')).toBeVisible();

  // Check if sections are present
  await expect(page.locator('h2', { hasText: 'Sobre Mim' })).toBeVisible();
  await expect(page.locator('h2', { hasText: 'Habilidades e Ferramentas' })).toBeVisible();
  await expect(page.locator('h2', { hasText: 'Projetos em Destaque' })).toBeVisible();
});
