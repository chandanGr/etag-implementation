import React from 'react';

import TabPanel from '../../Components/TabPanel';
import ProductCard from '../../Components/ViewComponents/ProductCard';

import { items, productDetails } from '../Constants';

import './index.scss'

function HomePage (){
	return (
		<>
			<TabPanel
				tabPanelItems={items}
				onClickSelectedTab={(tab, key) => {
					console.log('tab', tab, 'key', key)
				}}
			/>

			<ul className='productDetailsContainer'>
				{productDetails && productDetails.map((productDetail, key) => {
					productDetail.productImage = (key % 2) ? 'https://cdn-icons.flaticon.com/png/512/3121/premium/3121219.png?token=exp=1640846181~hmac=c151774acb6fc307063358b314cdca01' : 'https://cdn-icons-png.flaticon.com/512/3534/3534312.png';
					return (
						<li key={key}>
							<ProductCard
								productDetail={productDetail}
								onClickProductCard={(productDetail) => {
									console.log('productDetail', productDetail)
								}}
							/>
						</li>
					);
				})}
			</ul>
		</>

	);
}

export default HomePage;
