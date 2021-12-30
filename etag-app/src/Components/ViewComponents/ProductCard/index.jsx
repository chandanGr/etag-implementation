import React from 'react';

import './index.scss';

function ProductCard (props){
	const { productName, productPrice, productImage } = props.productDetail;
	return (
		<div className='productCard' onClick={() => props.onClickProductCard(props.productDetail)}>
            <img src={productImage} />
			<p className='productCard__name'>{productName}</p>
			<p className='productCard__price'>
				Rs <span>{productPrice}</span>
			</p>
		</div>
	);
}

export default React.memo(ProductCard);
