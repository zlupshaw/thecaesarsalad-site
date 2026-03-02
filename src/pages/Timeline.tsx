import './timeline.css';

type TimelineItem = {
	dateLabel: string;
	title: string;
	timeLabel: string;
	description: string;
};

const TIMELINE_ITEMS: TimelineItem[] = [
	{
		dateLabel: 'Friday, October 2, 2026',
		title: 'Hotel Check-In Window Opens',
		timeLabel: 'Anytime',
		description: 'Room block stay begins at Campfire Hotel. Book dates in the block from October 2 through October 5.'
	},
	{
		dateLabel: 'Saturday, October 3, 2026',
		title: 'Happy Hour',
		timeLabel: '4:00 PM - 7:00 PM',
		description: 'Kick off the weekend and hang out before wedding day.'
	},
	{
		dateLabel: 'Sunday, October 4, 2026',
		title: 'Ceremony',
		timeLabel: 'Time TBD',
		description: 'Wedding ceremony at Skyliner Lodge.'
	},
	{
		dateLabel: 'Sunday, October 4, 2026',
		title: 'Reception',
		timeLabel: 'Immediately After Ceremony (Time TBD)',
		description: 'Reception to follow the ceremony.'
	},
	{
		dateLabel: 'Monday, October 5, 2026',
		title: 'Hotel Check-Out',
		timeLabel: 'Morning',
		description: 'Final day of the room block stay window.'
	}
];

export default function Timeline() {
	return (
		<section className="timelinePage">
			<div className="timelineShell">
				<header className="timelineHeader">
					<h1>Wedding Weekend Timeline</h1>
					<p>October 2-5, 2026</p>
				</header>

				<ol className="timelineList">
					{TIMELINE_ITEMS.map((item) => (
						<li key={`${item.dateLabel}-${item.title}`} className="timelineItem">
							<p className="timelineDate">{item.dateLabel}</p>
							<h2>{item.title}</h2>
							<p className="timelineTime">{item.timeLabel}</p>
							<p className="timelineDescription">{item.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
