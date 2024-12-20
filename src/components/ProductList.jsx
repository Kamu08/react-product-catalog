import ProductItem from "./ProductItem";

const ProductList = ({ products = [], addToCart = () => {} }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:px-10 lg:px-20 pt-10 '>
			{products.length > 0 ? (
				products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))
			) : (
				<div className='col-span-full text-center text-gray-500'>
					No products found.
				</div>
			)}
		</div>
	);
};

export default ProductList;
