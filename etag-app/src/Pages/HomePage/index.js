import React from 'react';

import TabPanel from '../../Components/TabPanel';

const items = [
	{
		panelID: '1',
		panelName: 'All',
		panelType: 'ALL',
		panelIcon: 'O',
	},
	{
		panelID: '2',
		panelName: 'Shoes',
		panelType: 'SHOES',
		panelIcon: 'O',
	},
	{
		panelID: '3',
		panelName: 'Pants',
		panelType: 'PANTS',
		panelIcon: 'O',
	},
	{
		panelID: '4',
		panelName: 'Shirts',
		panelType: 'SHIRTS',
		panelIcon: 'O',
	},
];

function HomePage (){
	return (
        <TabPanel
            tabPanelItems={items}
            onClickSelectedTab={(tab, key) => {
                console.log('tab', tab, 'key', key)
            }}
        >
		</TabPanel>
	);
}

export default HomePage;
