export class ProductModel {
	image: string;
	title: string;
	price: number;
	olpPrice: number;
	credit: number;
	calculateRating: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	characteristics: {
		[key: string]: string;
	};

}
