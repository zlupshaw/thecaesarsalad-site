import './ceremony.css';

const RECEPTION_ADDRESS = '64649 Wharton Ave, Bend, OR 97703';

export default function Reception() {
	return (
		<section className="venuePage">
			<div className="venueShell">
				<header className="venueHeader">
					<h1>Reception</h1>
					<p>Bend Cider Co.</p>
					<p>{RECEPTION_ADDRESS}</p>
				</header>

				<div className="venueGrid">
					<div className="venueMapWrap">
						<iframe
							title="Bend Cider Co. Map"
							src={`https://www.google.com/maps?q=${encodeURIComponent(RECEPTION_ADDRESS)}&output=embed`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>

					<div className="venuePhotos">
						<div className="sitePhoto">
							<img src="/assets/cider1.webp" alt="Bend Cider Co. Photo 1" />
						</div>
						<div className="sitePhoto">
							<img src="/assets/cider2.webp" alt="Bend Cider Co. Photo 2" />
						</div>
					</div>
				</div>

				<section className="venueCopy">
					<p>After we make it official, we’re heading back toward town to celebrate at Bend Cider Co.</p>
					<p>
						This place feels very Bend. Relaxed, social, and built around good drinks and hanging out. There will be cider, food, music, and plenty
						of time to actually talk to people you haven’t seen in years instead of whispering through a formal ballroom dinner.
					</p>
					<p>Basically the “let’s party but still be comfortable” portion of the evening.</p>
				</section>
			</div>
		</section>
	);
}
