import './ceremony.css';

const HOTEL_ADDRESS = '721 NE 3rd St, Bend, OR 97701';

export default function Hotel() {
	return (
		<section className="venuePage">
			<div className="venueShell">
				<header className="venueHeader">
					<h1>Hotel</h1>
					<p>Campfire Hotel</p>
					<p>{HOTEL_ADDRESS}</p>
				</header>

				<div className="venueGrid">
					<div className="venueMapWrap">
						<iframe
							title="Campfire Hotel Map"
							src={`https://www.google.com/maps?q=${encodeURIComponent(HOTEL_ADDRESS)}&output=embed`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>

					<div className="venuePhotos">
						<div className="sitePhoto">
							<img src="/src/assets/campfire1.webp" alt="Campfire Hotel Photo 1" />
						</div>
						<div className="sitePhoto">
							<img src="/src/assets/campfire2.webp" alt="Campfire Hotel Photo 2" />
						</div>
					</div>
				</div>

				<section className="venueCopy">
					<p>
						We’ve got a room block at Campfire Hotel, which is less “hotel” and more retro road-trip basecamp. Fire pits, mountain lodge vibes, and
						a heated pool open year-round.
					</p>
					<p>Yes, bring a swimsuit. Even in October. Especially in October.</p>

					<p>
						<a
							href="https://reservations.verticalbooking.com//premium/index.html?dc=1443&id_albergo=23189&lingua_int=usa&id_stile=17497&codice_roomlist=UPSHAWKANAK26"
							target="_blank"
							rel="noopener noreferrer">
							Book Campfire Hotel with our room block
						</a>
					</p>

					<p>
						The link books Friday October 2nd through Sunday October 4th. If you want to stay longer, just make a second reservation for the extra
						nights and call the hotel. They can merge the reservations so you keep the same room.
					</p>
				</section>
			</div>
		</section>
	);
}
