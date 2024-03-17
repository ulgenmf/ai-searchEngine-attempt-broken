import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ImageLoaderProps } from 'next/image';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}





export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};



//export async function customFetch({
//	method = 'POST',
//	endpoint,
//	body,
//	contentType = 'application/json',
//	respons
//}: {
//	method?: string;
//	endpoint: string;
//	body: any;
//	contentType?: string;
//}) {
//	try {
//		const response = await fetch(endpoint, {
//			method: method,
//			headers: {
//				'Content-Type': contentType,
//			},
//			body: body,
//		});

//		if (!response.ok) {
//			console.log(response.status)
//			throw new Error('Network response was not ok');
//		}

//		const data = await response.json();
//		console.log(data)
//		return data;
//	} catch (error) {
//		console.error('Error:', error);
//		throw error; // Re-throw the error to be handled by the caller
//	}
//}