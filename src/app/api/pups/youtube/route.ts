

//import { NextRequest, NextResponse } from 'next/server'
//import puppeteer from 'puppeteer';

//export async function POST(req: NextRequest, res: NextResponse) {
//	const { searchTerm } = await req.json()
//	console.log(searchTerm)
//	try {
//		const browser = await puppeteer.launch();
//		const page = await browser.newPage();

//		await page.goto(`https://www.google.com/search?q=${searchTerm}`);
//		await page.waitForSelector('.g');

//		const searchResults = await page.$$eval('.g', (results) => {
//			return results.map((result) => {
//				const titleElement = result.querySelector('h3');
//				const linkElement = result.querySelector('a');
//				const image = result.querySelector('img')
//				return {
//					title: titleElement ? titleElement.textContent : '',
//					link: linkElement ? linkElement.href : '',

//				};
//			});
//		});
//		//console.log(searchResults)

//		await browser.close();
//		return new Response(JSON.stringify({searchResults }), { status: 200 });
//	} catch (error) {
//		console.log(error)

//	}
//	return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
//}