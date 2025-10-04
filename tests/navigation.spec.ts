import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to all pages', async ({ page }) => {
    await page.goto('/')

    // Check home page loads
    await expect(page.locator('h1')).toContainText('Cloud, DevOps & Automation')

    // Check navigation links work
    await page.click('text=Projects')
    await expect(page.locator('h1')).toContainText('Top Projects')

    await page.click('text=Blogs')
    await expect(page.locator('h1')).toContainText('Sharing Knowledge')

    await page.click('text=Achievements')
    await expect(page.locator('h1')).toContainText('Achievements')
  })

  test('should have working CTAs', async ({ page }) => {
    await page.goto('/')

    // Check View My Work button
    await page.click('text=View My Work')
    await expect(page.locator('h1')).toContainText('Top Projects')

    // Go back to home
    await page.goto('/')

    // Check Read My Blogs button
    await page.click('text=Read My Blogs')
    await expect(page.locator('h1')).toContainText('Sharing Knowledge')
  })
})

test.describe('Accessibility', () => {
  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/')

    // Check for h1
    await expect(page.locator('h1')).toBeVisible()

    // Check for proper heading hierarchy
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').allTextContents()
    expect(headings.length).toBeGreaterThan(0)
  })

  test('should have keyboard navigation', async ({ page }) => {
    await page.goto('/')

    // Tab through interactive elements
    await page.keyboard.press('Tab')
    await expect(page.locator('*:focus')).toBeVisible()

    // Should be able to tab to multiple elements
    await page.keyboard.press('Tab')
    await expect(page.locator('*:focus')).toBeVisible()
  })
})
