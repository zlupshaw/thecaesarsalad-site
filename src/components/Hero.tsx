import { motion, type HTMLMotionProps } from 'framer-motion';
import type { Ref } from 'react';

type HeroProps = {
	className?: string;
	heroRef?: Ref<HTMLElement>;
	heroMotionProps?: HTMLMotionProps<'header'>;
	titleRef?: Ref<HTMLHeadingElement>;
	titleMotionProps?: HTMLMotionProps<'h1'>;
	dateMotionProps?: HTMLMotionProps<'div'>;
	placeMotionProps?: HTMLMotionProps<'div'>;
	showDetails?: boolean;
};

export default function Hero({ className, heroRef, heroMotionProps, titleRef, titleMotionProps, dateMotionProps, placeMotionProps, showDetails = true }: HeroProps) {
	return (
		<motion.header ref={heroRef} className={['hero', className].filter(Boolean).join(' ')} {...heroMotionProps}>
			<motion.h1 ref={titleRef} className="title" {...titleMotionProps}>
				Zach + Sara
			</motion.h1>
			{showDetails ? (
				<>
					<motion.div className="date" {...dateMotionProps}>
						10.4.2026
					</motion.div>
					<motion.div className="place" {...placeMotionProps}>
						Bend, OR
					</motion.div>
				</>
			) : null}
		</motion.header>
	);
}
