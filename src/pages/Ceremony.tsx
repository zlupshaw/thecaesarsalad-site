import './ceremony.css';

const CEREMONY_ADDRESS = '16125 Skyliners Rd, Bend, OR 97701';

export default function Ceremony() {
	return (
		<section className="venuePage">
			<div className="venueShell">
				<header className="venueHeader">
					<h1>Ceremony</h1>
					<p>Skyliner Lodge</p>
					<p>{CEREMONY_ADDRESS}</p>
				</header>

				<div className="venueGrid">
					<div className="venueMapWrap">
						<iframe
							title="Skyliner Lodge Map"
							src={`https://www.google.com/maps?q=${encodeURIComponent(CEREMONY_ADDRESS)}&output=embed`}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>

				<section className="venueCopy">
					<p>
						Skyliner Lodge sits just outside Bend surrounded by tall pines and that quiet mountain air that makes you suddenly breathe deeper
						without realizing it. It’s an old 1930s lodge that feels equal parts summer camp and cozy cabin, which is exactly the vibe we wanted.
					</p>
					<p>The ceremony will be outdoors under the trees, so expect shade, forest sounds, and hopefully a perfect Central Oregon fall afternoon.</p>
				</section>
			</div>
		</section>
	);
}
