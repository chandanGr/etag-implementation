import React, { useState } from 'react';

import SizeItem from '../ViewComponents/SizeItem';

import { sizeItems } from './Constants';

import './index.scss';

function Size (props){
	const [selectedSize, setSelectedSize] = useState(-1);

	const onClickSizeItem = (sizeItem, index) => {
        setSelectedSize(index);
        props.onClickSizeItem && props.onClickSizeItem(sizeItem, index);
	};

    return (
        <div className='sizeContainer'>
            <h3>Size: </h3>
		    <ul className='sizeWrapper'>
			    {sizeItems && sizeItems.length > 0 && sizeItems.map((sizeItem, index) => {
					return (
						<li
							key={index}
							onClick={() => onClickSizeItem(sizeItem, index)}
							className={selectedSize === index ? 'sizeWrapper__item selected' :
								'sizeWrapper__item'
							}
						>
							<SizeItem sizeDetail={sizeItem} />
						</li>
					);
				})}
            </ul>
        </div>
	);
}

export default Size;
