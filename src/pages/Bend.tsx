import './infopage.css';

export default function Bend() {
	return (
		<section className="infoPage">
			<div className="infoShell">
				<header className="infoHeader">
					<h1>Recommendations</h1>
					<p>A few of our favorite spots to help you make the most of your time in Bend.</p>
				</header>

				<div className="infoSection">
					<h2>Parks</h2>
					<div className="infoCards">
						<div className="infoCard">
							<h3>Pilot Butte</h3>
							<p>
								An extinct volcanic cinder cone right in the middle of town. Hike to the top for a 360-degree view of the Cascade range — on a
								clear October day you can spot a dozen peaks. The trail is short but earns you the view.
							</p>
							<a href="https://www.oregon.gov/oprd/parks/pages/pilotbutte.aspx" target="_blank" rel="noreferrer">
								Oregon State Parks →
							</a>
						</div>

						<div className="infoCard">
							<h3>Drake Park</h3>
							<p>
								A peaceful riverside park along the Deschutes River in downtown Bend. Great for a morning walk, watching the ducks, or just
								sitting by the water. The Mirror Pond reflection of the surrounding pines is worth seeing in person.
							</p>
						</div>

						<div className="infoCard">
							<h3>Shevlin Park</h3>
							<p>
								A beautiful 652-acre city park just west of downtown, with trails winding through old-growth ponderosa pines along Tumalo Creek.
								It's quiet, shaded, and feels far removed from town even though it's only five minutes away.
							</p>
						</div>
					</div>
				</div>

				<div className="infoSection">
					<h2>Food &amp; Drink</h2>
					<div className="infoCards">
						<div className="infoCard">
							<p className="infoCardTag">Dinner</p>
							<h3>Spork</h3>
							<p>
								Street food-inspired dishes with bold flavors — think Southeast Asian and Latin American influences done really well. The menu
								rotates and everything is fresh. A great spot for a fun, lively dinner.
							</p>
							<a href="https://www.sporkbend.com" target="_blank" rel="noreferrer">
								sporkbend.com →
							</a>
						</div>

						<div className="infoCard">
							<p className="infoCardTag">Brunch</p>
							<h3>McKay Cottage</h3>
							<p>
								A beloved Bend brunch spot in a cozy historic cottage. Expect a line, but it moves — and the eggs Benedict and French toast
								are worth every minute of the wait.
							</p>
						</div>

						<div className="infoCard">
							<p className="infoCardTag">Brunch</p>
							<h3>The Lemon Tree</h3>
							<p>
								A bright, airy café with a focus on fresh ingredients and seasonal dishes. Excellent coffee and a relaxed vibe — perfect for a
								slow morning before the festivities.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
