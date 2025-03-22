import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../lib";

interface ProductCardProps {
	product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="card bg-base-100 shadow-sm w-full max-w-xs">
			<figure>
				<img src={product.image[0]} alt={product.name} className="object-cover w-full h-48" />
			</figure>
			<div className="card-body p-4">
				<h2 className="card-title text-lg font-bold flex justify-between items-start">
					{product.name}
					<div className="badge badge-secondary text-xs">{product.listed_price}</div>
				</h2>
				<p className="text-sm mb-4 line-clamp-3">{product.description}</p>
				<div className="card-actions flex flex-col gap-3">
					<Link to={`/products/${product.id}`} className="btn btn-primary btn-sm w-full mt-2">
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
