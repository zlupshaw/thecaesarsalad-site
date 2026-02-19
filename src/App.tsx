import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import Ceremony from './pages/Ceremony';
import Reception from './pages/Reception';
import Hotel from './pages/Hotel';
import Rsvp from './pages/Rsvp';
import Information from './pages/Information';
import './App.css';

export default function App() {
	return (
		<Routes>
			<Route element={<SiteLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/ceremony" element={<Ceremony />} />
				<Route path="/reception" element={<Reception />} />
				<Route path="/hotel" element={<Hotel />} />
				<Route path="/rsvp" element={<Rsvp />} />
				<Route path="/information" element={<Information />} />
			</Route>
		</Routes>
	);
}
