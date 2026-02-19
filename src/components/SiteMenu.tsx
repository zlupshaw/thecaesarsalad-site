import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
	{ to: '/ceremony', label: 'Ceremony' },
	{ to: '/reception', label: 'Reception' },
	{ to: '/hotel', label: 'Hotel Block' },
	{ to: '/rsvp', label: 'RSVP' },
	{ to: '/information', label: 'Information' }
];

export default function SiteMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<header className="siteMenuWrap">
			<nav className="siteMenu" aria-label="Main">
				<NavLink to="/" className="siteBrand" onClick={handleClose}>
					Z + S
				</NavLink>

				<button
					type="button"
					className="siteMenuToggle"
					onClick={() => setIsOpen((open) => !open)}
					aria-expanded={isOpen}
					aria-label="Toggle menu">
					<span />
					<span />
					<span />
				</button>

				<div className={`siteMenuLinks ${isOpen ? 'open' : ''}`}>
					{NAV_ITEMS.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							onClick={handleClose}
							className={({ isActive }) => `siteMenuLink${isActive ? ' active' : ''}`}>
							{item.label}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	);
}
