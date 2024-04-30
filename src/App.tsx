import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { About } from './containers/About/About'
import { Services } from './containers/Services/Services'

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About/>} />
			<Route path="/services" element={<Services/>} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
		</Routes>
	)
}

export default App
