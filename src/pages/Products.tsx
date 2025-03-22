import React, { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://pi-master.local:3080");

export function Products() {
	const [products, setProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Create an async function to fetch products
		const fetchProducts = async () => {
			try {
				const resultList = await pb.collection("products").getList(1, 6);
				// Set the products state with the items from PocketBase
				setProducts(resultList.items);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		};

		// Call the async function
		fetchProducts();
	}, []);

	if (loading) {
		return <div className="loading">Loading products...</div>;
	}

	return (
		<div className="flex flex-col mx-auto max-w-[1200px] my-12">
			<div>
				<h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
			</div>

			<div className="grid place-items-center grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
