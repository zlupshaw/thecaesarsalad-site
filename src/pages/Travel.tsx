import './infopage.css';

export default function Travel() {
	return (
		<section className="infoPage">
			<div className="infoShell">
				<header className="infoHeader">
					<h1>Getting to Bend</h1>
					<p>Central Oregon is worth the trip — here are the easiest ways to get there.</p>
				</header>

				<div className="infoSection">
					<h2>Flying In</h2>
					<div className="infoCards">
						<div className="infoCard">
							<p className="infoCardTag">Closest Airport</p>
							<h3>Redmond Municipal Airport (RDM)</h3>
							<p>
								RDM is your closest bet — a small regional airport about 20 minutes north of Bend. Served by Alaska, American, Delta, and
								United, it gets you to Central Oregon with minimal hassle and no long drive.
							</p>
							<a href="https://www.flyrdm.com" target="_blank" rel="noreferrer">
								flyrdm.com →
							</a>
						</div>

						<div className="infoCard">
							<p className="infoCardTag">Make a Trip of It</p>
							<h3>Portland International (PDX)</h3>
							<p>
								If you want to explore before the wedding, flying into Portland is a great way to do it. Spend a day or two in the city, then
								head south through Mt. Hood and the Cascades on US-97 — it's a stunning 2.5–3 hour drive and an easy way to ease into Oregon.
								October roads are clear and the fall colors make for a beautiful arrival.
							</p>
							<a href="https://www.portofportland.com/pdx" target="_blank" rel="noreferrer">
								portofportland.com →
							</a>
						</div>
					</div>
					<p className="infoNote">
						October is a great time to visit — the passes are well past snow season and the fall colors along the drive make for a scenic arrival.
					</p>
				</div>

				<div className="infoSection">
					<h2>Getting Around</h2>
					<div className="infoCards">
						<div className="infoCard">
							<h3>Rent a Car</h3>
							<p>
								Bend is a drive-friendly town and having a car makes it easy to explore. Rentals are available at RDM; if you're flying into PDX
								you'll want one for the drive down anyway.
							</p>
						</div>

						<div className="infoCard">
							<h3>Rideshare</h3>
							<p>
								Uber and Lyft both operate in Bend. For event nights when you'd rather not drive, rideshare is a solid option — just give
								yourself a few extra minutes in case of wait times.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
