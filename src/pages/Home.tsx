import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
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

const HERO_LANDING_Y_OFFSET = -3;

export default function Home() {
	const navigate = useNavigate();
	const location = useLocation();
	const skipIntro = new URLSearchParams(location.search).get('skipIntro') === '1';
	const heroRef = useRef<HTMLElement>(null);
	const [showIndexContent, setShowIndexContent] = useState(skipIntro);
	const [showHeroOverlay, setShowHeroOverlay] = useState(!skipIntro);
	const [overlayTarget, setOverlayTarget] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (skipIntro) {
			setShowIndexContent(true);
			setShowHeroOverlay(false);
		}
	}, [skipIntro]);

	const updateTarget = useCallback(() => {
		if (!heroRef.current) return;
		const rect = heroRef.current.getBoundingClientRect();
		setOverlayTarget({
			x: rect.left + rect.width / 2 - window.innerWidth / 2,
			y: rect.top + rect.height / 2 - window.innerHeight / 2 + HERO_LANDING_Y_OFFSET
		});
	}, []);

	useLayoutEffect(() => {
		updateTarget();
		window.addEventListener('resize', updateTarget);
		return () => {
			window.removeEventListener('resize', updateTarget);
		};
	}, [updateTarget]);

	useEffect(() => {
		if (!showHeroOverlay) return;

		const previousBodyOverflow = document.body.style.overflow;
		const previousHtmlOverflow = document.documentElement.style.overflow;
		document.body.classList.add('hero-overlay-active');
		window.scrollTo(0, 0);
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.body.classList.remove('hero-overlay-active');
			document.body.style.overflow = previousBodyOverflow;
			document.documentElement.style.overflow = previousHtmlOverflow;
		};
	}, [showHeroOverlay]);

	const handleOverlayMoveStart = useCallback(() => {
		setShowIndexContent(true);
	}, []);

	const handleOverlayComplete = useCallback(() => {
		setShowHeroOverlay(false);
	}, []);

	return (
		<div className="page">
			{showHeroOverlay ? <HeroOverlay target={overlayTarget} onMoveStart={handleOverlayMoveStart} onComplete={handleOverlayComplete} /> : null}

			<div className="shell">
				<Hero
					className="heroIntro"
					heroRef={heroRef}
					heroMotionProps={{
						initial: { opacity: 0 },
						animate: { opacity: showHeroOverlay ? 0 : 1 },
						transition: { duration: 0.08, ease: 'linear' }
					}}
					titleMotionProps={{
						initial: false
					}}
				/>

				<motion.div
					initial={false}
					animate={{ opacity: showIndexContent ? 1 : 0, y: showIndexContent ? 0 : 20 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					style={{ pointerEvents: showIndexContent ? 'auto' : 'none' }}>
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

						<LegendRow
							iconPath="/src/assets/ceremonyicon.jpeg"
							title="Ceremony"
							place="Skyliner Lodge"
							detail="16114 Skyliners Rd"
							onClick={() => navigate('/ceremony')}
						/>
						<LegendRow
							iconPath="/src/assets/receptionicon.jpeg"
							title="Reception"
							place="Bend Cider"
							detail="64649 McGrath Rd"
							onClick={() => navigate('/reception')}
						/>
						<LegendRow
							iconPath="/src/assets/sleepicon.jpeg"
							title="Hotel Block"
							place="Campfire Hotel"
							detail="721 NE 3rd St"
							onClick={() => navigate('/hotel')}
						/>
					</section>
				</motion.div>
			</div>
		</div>
	);
}

function HeroOverlay(props: { target: { x: number; y: number }; onMoveStart: () => void; onComplete: () => void }) {
	const controls = useAnimationControls();
	const titleControls = useAnimationControls();
	const dateControls = useAnimationControls();
	const placeControls = useAnimationControls();
	const { target, onMoveStart, onComplete } = props;
	const targetRef = useRef(target);

	useEffect(() => {
		targetRef.current = target;
	}, [target.x, target.y]);

	useEffect(() => {
		let active = true;
		const sleep = (ms: number) =>
			new Promise<void>((resolve) => {
				window.setTimeout(resolve, ms);
			});

		const runSequence = async () => {
			await controls.start({
				scale: 1.9,
				x: 0,
				y: 0,
				opacity: 1,
				transition: { duration: 0.01, ease: 'linear' }
			});
			if (!active) return;

			await titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } });
			if (!active) return;
			await sleep(220);
			if (!active) return;

			await dateControls.start({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } });
			if (!active) return;
			await sleep(190);
			if (!active) return;

			await placeControls.start({ opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } });
			if (!active) return;
			await sleep(940);
			if (!active) return;

			const landingTarget = targetRef.current;

			await controls.start({
				scale: 1,
				x: landingTarget.x * 0.9,
				y: landingTarget.y * 0.9,
				opacity: 1,
				transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
			});
			if (!active) return;

			onMoveStart();

			await controls.start({
				scale: 1,
				x: landingTarget.x,
				y: landingTarget.y,
				opacity: 1,
				transition: { duration: 0.1, ease: 'linear' }
			});
			if (!active) return;

			onComplete();
		};

		runSequence();
		return () => {
			active = false;
		};
	}, [controls, dateControls, onComplete, onMoveStart, placeControls, titleControls]);

	return (
		<div className="heroOverlay">
			<Hero
				className="heroOverlayHero"
				heroMotionProps={{
					initial: { scale: 1.9, x: 0, y: 0, opacity: 1 },
					animate: controls
				}}
				titleMotionProps={{ initial: { opacity: 0, y: 10 }, animate: titleControls }}
				dateMotionProps={{ initial: { opacity: 0, y: 10 }, animate: dateControls }}
				placeMotionProps={{ initial: { opacity: 0, y: 10 }, animate: placeControls }}
			/>
		</div>
	);
}

function LegendRow(props: { iconPath: string; title: string; place: string; detail: string; onClick: () => void }) {
	return (
		<button className="legendRow" onClick={props.onClick} type="button">
			<img src={props.iconPath} alt={props.title} className="legendIcon" />
			<div>
				<div className="legendTitle">{props.title}</div>
				<div className="legendPlace">{props.place}</div>
				<div className="legendDetail">{props.detail}</div>
			</div>
		</button>
	);
}
