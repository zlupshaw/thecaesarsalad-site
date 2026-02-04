import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ceremony from './pages/Ceremony';
import Reception from './pages/Reception';
import Hotel from './pages/Hotel';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ceremony" element={<Ceremony />} />
			<Route path="/reception" element={<Reception />} />
			<Route path="/hotel" element={<Hotel />} />
		</Routes>
	);
}
