import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductDetailsPage from './Pages/ProductDetailsPage';

function App (){
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/productdetail' element={<ProductDetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
