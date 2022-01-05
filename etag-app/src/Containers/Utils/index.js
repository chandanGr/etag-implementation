const getProductImages = new Map();
getProductImages.set('TOPS', 'https://cdn-icons-png.flaticon.com/512/3534/3534312.png');
getProductImages.set('SHIRTS', 'https://cdn-icons-png.flaticon.com/512/6504/6504745.png');
getProductImages.set('SHOES', 'https://cdn-icons-png.flaticon.com/512/2589/2589904.png');
getProductImages.set('PANTS', 'https://cdn-icons-png.flaticon.com/512/2435/2435586.png');
export const formatProductList = (productList) => {
	return productList.map((product) => {
		product.productImage = getProductImages.get(product.categoryType);
		return product;
	});
};
