import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';

export default function CardList({ stories }) {
	const animation = useAnimation();
	const { ref, inView } = useInView({ threshold: 0.2 });
	useEffect(() => {
		if (inView) {
			const container = {
				opacity: [0, 1],
				transition: {
					type: 'spring',
					duration: 0.5,
					staggerChildren: 0.3,
				},
			};
			animation.start(container);
		} else {
			animation.start({ opacity: 0 });
		}
	}, [animation, inView, stories]);
    const featuredStories = stories.sort((a, b) => {
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    });
    return (
        <>
			<h2 className='my-10 pl-6 md:pl-20'>Origin Stories</h2>
                            name,
                            picture,
                            username,
                            content,
                            excerpt,
                            slug,
                            featured,
                        },
			<motion.div
				ref={ref}
				className='grid lg:grid-cols-3 justify-items-center'
				animate={animation}>
				{featuredStories.map((story, index) => (
					<Card key={index} story={story} index={index} />
				))}
                                    duration: 0.8,
                                    delay: index / 10,
                                }}
                            >
                                            {username}
                                        </small>
                                    className="w-full mt-2"
                                    passHref
                                >
                                    >
			</motion.div>
        </>
    );
}
