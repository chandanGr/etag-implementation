import React from 'react';

import Size from '../../Components/Size';

import './index.scss';

function ProductDetailsPage (){
	return (
        <div className='productDetailsPage'>
            <div className='productDetailsPage__imageSection'>
                <img src='https://cdn-icons-png.flaticon.com/512/6504/6504745.png'/>
            </div>
            <div className='productDetailsPage__formSection'>
                <h1>Shirt 1</h1>
                <Size onClickSizeItem={(sizeItem, index) => {
                    console.log('sizeItem, index', sizeItem, index)
                    }}
                />
                <div className='quantityContainer'>
                    <h3>Select Quantity: </h3>
                    <input id='quantity' className='quantity' type='number' />
                </div>
                <div className='buttonContainer'>
                    <button>Add to Cart</button>
                </div>
            </div>
		</div>
	);
}

export default ProductDetailsPage;
