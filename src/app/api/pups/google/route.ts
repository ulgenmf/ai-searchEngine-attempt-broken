import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
	const searchTerm = 'google'; // Define the search term

	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(`https://trends.google.com/trends/trendingsearches/realtime?geo=GB&hl=en-US&category=t`);
		await page.waitForSelector('.g');

		const searchResults = await page.$$eval('.g', (results) => {
			// Extract data from the first three search results
			return results.slice(0, 3).map((result) => {
				const titleElement = result.querySelector('h3');
				const linkElement = result.querySelector('a');

				return {
					title: titleElement ? titleElement.textContent : '',
					link: linkElement ? linkElement.href : '',
				};
			});
		});

		await browser.close();

		// Return the search results as JSON respons
		console.log(searchResults)
		return new Response(JSON.stringify({ searchResults }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ message: 'Error' }), { status: 500 });
	}
}
