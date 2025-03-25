import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	console.log(await page.url());
	await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
});

// test.describe('Projects Page', () => {
// 	test.beforeEach(async ({ page }) => {
// 		// Navigate to the Projects page
// 		await page.goto('/projects'); // Replace with your actual local dev server or deployed site URL
// 		console.log(await page.url());
// 	});

// 	test('loads projects data on page mount', async ({ page }) => {
// 		// Check the page title
// 		await expect(page.locator('h1.page-title')).toHaveText('Projects');

// 		// Wait for projects to load
// 		const projectCards = page.locator('.card');
// 		// await expect(projectCards).toHaveCount(6); // Example: Adjust the count based on your test data

// 		// Validate content of a project card
// 		const firstProjectTitle = await projectCards.nth(0).locator('h2').textContent();
// 		expect(firstProjectTitle).toBe('Cave Lion'); // Update this value based on your JSON data
// 	});

// 	test('projects contain valid links and images', async ({ page }) => {
// 		// Ensure that every card contains a valid link and image
// 		const projectCards = page.locator('.card');
// 		const firstCard = projectCards.nth(0);

// 		const projectLink = firstCard.locator('a');
// 		await expect(projectLink).toHaveAttribute('href', '/cave-lion'); // Replace with the actual expected link

// 		const projectImage = firstCard.locator('img');
// 		await expect(projectImage).toHaveAttribute('src', '/images/projects/Cave Lion_AI.png'); // Replace with the actual expected image URL
// 	});

// 	test('View Project button navigates correctly', async ({ page }) => {
// 		// Test functionality of "View Project" button
// 		const viewButton = page.locator('button:has-text("View Project")');
// 		await viewButton.first().click();

// 		// Validate navigation (adjust the expected URL accordingly)
// 		await expect(page).toHaveURL('/cave-lion'); // Replace with the actual project ID URL
// 	});
// });
