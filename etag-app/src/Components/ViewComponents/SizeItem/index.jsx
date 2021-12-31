import React from 'react';

function SizeItem (props){
	return <div className='sizeItemContainer'>{props.sizeDetail.label}</div>;
}

export default React.memo(SizeItem);
