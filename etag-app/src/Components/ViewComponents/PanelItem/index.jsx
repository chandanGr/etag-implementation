import React from 'react'

import './index.scss';

function PanelItem({ panelName }) {
    return (
        <div className='panelItem'>
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"/>
            <p className='panelItem__text'>{panelName}</p>
        </div>
    )
}

export default React.memo(PanelItem);
