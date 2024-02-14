import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import ProductDetail from './components/ProductDetail'
import ContentRowInfo from './components/ContentRowInfo'
import LastProductInDb from './components/LastProductInDb'
import Footer from './components/Footer'

import Users from './components/User'
import Products from './components/Products'
import UserDetail from './components/UserDetail'





import './App.css'

function App() {
	return (
		
		<div id="wrapper">
			{/* <!-- Sidebar --> */}

			<Sidebar />
			
			{/* <!-- End of Sidebar --> */}
			{/* <!-- Content Wrapper --> */}
			<div id="content-wrapper" className="d-flex flex-column margin-left-navbar">
	

			<Routes>
				<Route path="/" element={<ContentWrapper />} />

				<Route path="/product/:id" element={<ProductDetail />} />

				<Route path="/products" element={<Products />} />

				<Route path="/usuario/:id" element={<UserDetail />} />
				<Route path="/usuarios" element={<Users />} />
				
				<Route path="/movies" element={<ContentRowInfo />} />

				<Route path="/last-product" element={<LastProductInDb />} />


				
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}
      <Footer/>
			</div>
		</div>
	)
}

export default App