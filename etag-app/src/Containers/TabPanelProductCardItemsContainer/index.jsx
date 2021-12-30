import React, { useState, useCallback } from 'react'

import TabPanel from '../../Components/TabPanel';
import ProductCard from '../../Components/ViewComponents/ProductCard';

import { items, productDetails } from '../../Pages/Constants';

import './index.scss';

function TabPanelProductCardItemsContainer() {
	const [productDetailItems, setProductDetails] = useState(productDetails);

	// This function will be an API call
	const onSelectedTab = useCallback((selectedTab, key) => {
		if (selectedTab.panelType === 'ALL') {
			setProductDetails(productDetails);
			return;
		}
		const filteredProductDetails = productDetails.filter(
			(productDetail) => productDetail.prductType === selectedTab.panelType
		);
		setProductDetails(filteredProductDetails);
	}, [productDetailItems]);

    return (
		<div className='TabPanelProductCardItemsContainer'>
			<TabPanel
				tabPanelItems={items}
				onClickSelectedTab={(tab, key) => onSelectedTab(tab, key)}
			/>

			<ul className='productCardItemContainer'>
				{productDetailItems && productDetailItems.map((productDetail, key) => {
					return (
						<li key={productDetail.productID}>
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
		</div>
    )
}

export default React.memo(TabPanelProductCardItemsContainer);
