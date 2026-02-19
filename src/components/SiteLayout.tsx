import { Outlet } from 'react-router-dom';
import SiteMenu from './SiteMenu';

export default function SiteLayout() {
	return (
		<>
			<SiteMenu />
			<main className="siteContent">
				<Outlet />
			</main>
		</>
	);
}
