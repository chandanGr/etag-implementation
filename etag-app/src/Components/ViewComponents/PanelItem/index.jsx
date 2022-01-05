import React from 'react'

import './index.scss';

function PanelItem(props) {
    const { categoryName, categoryIcon } = props.tabDetails;
    return (
        <div className='panelItem'>
            <img src={categoryIcon}/>
            <p className='panelItem__text'>{categoryName}</p>
        </div>
    )
}

export default React.memo(PanelItem);
