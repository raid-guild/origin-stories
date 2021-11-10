import { useInView } from 'react-intersection-observer';
import Card from './Card';

export default function CardList({ stories }) {
    const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
    const featuredStories = stories.sort((a, b) => {
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    });
    const featuredStoryCards = featuredStories.map((story, index) => {
        let cardProps = {
            name: story.name,
            slug: story.slug,
            header: story.header,
            username: story.username,
            featured: story.featured,
            picture: story.picture,
            excerpt: story.excerpt,
            index: index,
            inView: inView,
            maxLength: stories.length,
        };
        return <Card key={index} cardProps={cardProps} />;
    });
    return (
        <>
            <h2 className="pb-4">Origin Stories</h2>
            <div
                ref={ref}
                className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center"
            >
                {featuredStoryCards}
            </div>
        </>
    );
	const featuredStories = stories.sort((a, b) => {
		return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
	});
	return (
		<>
			<div className='grid lg:grid-cols-3 justify-items-center'>
				{featuredStories.map(
					(
						{ name, picture, username, content, excerpt, slug, featured },
						index
					) => {
						return (
							<div
								key={index}
								className={`card ${
									featured === true ? 'featured-raider-card' : ''
								}`}>
								{featured === true ? (
									<div className='flex justify-start items-center'>
										<p className='text-yellow-400 text-xs font-semibold uppercase mb-2 tracking-widest'>
											⭐ Featured Raider
										</p>
									</div>
								) : null}
								<p className='text-base line-clamp-4 mt-4'>
									&quot;{excerpt.substr(0, 100)}...&quot;
								</p>
								<div className='flex items-center justify-start space-x-2 border-b-2 my-4 pb-4 border-indigo-200 border-opacity-50'>
									<div className='rounded-full bg-primary h-12 w-12 relative overflow-hidden'>
										<Image
											src={picture}
											className='object-cover object-center'
											layout='fill'
											alt='Picture of the Interviewee'
										/>
									</div>
									<div>
										<p className='card-user'>{name}</p>
										<small className='opacity-70'>{username}</small>
									</div>
								</div>
								<Link href={'/origins/' + slug}>
									<a className='w-full mt-2'>
										<button
											type='button'
											className='transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 h-14 rounded items-center w-full font-semibold hover:from-primary hover:to-purple-700'>
											Read my story
										</button>
									</a>
								</Link>
							</div>
						);
					}
				)}
			</div>
		</>
	);
}
