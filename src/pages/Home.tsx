import { useNavigate } from 'react-router-dom';
import map from '../assets/map.jpeg';
import './home.css';

type Hotspot = {
	id: string;
	to: string;
	left: string;
	top: string;
	width: string;
	height: string;
};

const HOTSPOTS: Hotspot[] = [
	{
		id: 'ceremony',
		to: '/ceremony',
		left: '44.5%',
		top: '29%',
		width: '60px',
		height: '60px'
	},
	{
		id: 'reception',
		to: '/reception',
		left: '17%',
		top: '54%',
		width: '70px',
		height: '70px'
	},
	{
		id: 'hotel',
		to: '/hotel',
		left: '34%',
		top: '79.5%',
		width: '70px',
		height: '70px'
	}
];
export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="page">
			<div className="shell">
				<header className="hero">
					<h1 className="title">Zach + Sara</h1>
					<div className="date">10.4.2026</div>
					<div className="place">Bend, OR</div>
				</header>

				<div className="mapWrap" aria-label="Wedding map">
					<img className="mapImage" src={map} alt="Wedding map" />

					{HOTSPOTS.map((h) => (
						<button
							key={h.id}
							className="hotspot"
							style={{
								left: h.left,
								top: h.top,
								width: h.width,
								height: h.height
							}}
							onClick={() => navigate(h.to)}
							aria-label={h.id}
							type="button"
						/>
					))}
				</div>

				<section className="legend">
					<div className="legendHeader">Map Legend</div>
					<div className="legendRule" />

					<LegendRow title="Ceremony" place="Skyliner Lodge" detail="16114 Skyliners Rd" onClick={() => navigate('/ceremony')} />
					<LegendRow title="Reception" place="Bend Cider" detail="64649 McGrath Rd" onClick={() => navigate('/reception')} />
					<LegendRow title="Hotel Block" place="Campfire Hotel" detail="721 NE 3rd St" onClick={() => navigate('/hotel')} />
				</section>
			</div>
		</div>
	);
}

function LegendRow(props: { title: string; place: string; detail: string; onClick: () => void }) {
	return (
		<button className="legendRow" onClick={props.onClick} type="button">
			<div className="legendTitle">{props.title}</div>
			<div className="legendPlace">{props.place}</div>
			<div className="legendDetail">{props.detail}</div>
		</button>
	);
}
