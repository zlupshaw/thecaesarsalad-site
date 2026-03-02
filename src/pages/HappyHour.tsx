import './ceremony.css';

const HAPPY_HOUR_ADDRESS = '721 NE 3rd St, Bend, OR 97701';

export default function HappyHour() {
	return (
		<section className="venuePage">
			<div className="venueShell">
				<header className="venueHeader">
					<h1>Happy Hour</h1>
					<p>Outpost Meeting Room at Campfire Hotel</p>
					<p>{HAPPY_HOUR_ADDRESS}</p>
				</header>

				<div className="venueGrid">
					<div className="venueMapWrap">
						<iframe
							title="Campfire Hotel Map"
							src={`https://www.google.com/maps?q=${encodeURIComponent(HAPPY_HOUR_ADDRESS)}&output=embed`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>

					<div className="venuePhotos">
						<div className="sitePhoto">
							<img src="/assets/campfire1.webp" alt="Campfire Hotel Photo 1" />
						</div>
						<div className="sitePhoto">
							<img src="/assets/campfire2.webp" alt="Campfire Hotel Photo 2" />
						</div>
					</div>
				</div>

				<section className="venueCopy">
					<p>
						Our Happy Hour will be in the Outpost Meeting Room on Campfire Hotel&apos;s property.
					</p>
					<p>
						We&apos;ll have beer, wine, and small bites available in the room.
					</p>
					<p>
						If you&apos;d like a cocktail, you can pick one up at the Canteen in the Campfire lobby and bring it over.
					</p>
				</section>
			</div>
		</section>
	);
}
