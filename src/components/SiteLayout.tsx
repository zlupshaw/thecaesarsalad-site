import { Outlet } from 'react-router-dom';
import SiteMenu from './SiteMenu';

export default function SiteLayout() {
	return (
		<div className="siteFrame">
			<SiteMenu />
			<main className="siteContent">
				<Outlet />
			</main>
			<footer className="siteFooter">Zach + Sara • Bend, OR • 10.4.2026</footer>
		</div>
	);
}
