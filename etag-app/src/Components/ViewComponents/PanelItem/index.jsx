import React from 'react'

import './index.scss';

function PanelItem(props) {
    const { panelName, panelIcon } = props.tabDetails;
    return (
        <div className='panelItem'>
            <img src={panelIcon}/>
            <p className='panelItem__text'>{panelName}</p>
        </div>
    )
}

export default React.memo(PanelItem);
