import { useInView } from "react-intersection-observer";
import Card from "./Card";
import CardSmall from "./CardSmall";

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
      roles: story.roles,
      subcard: story.subcard,
    };
    if (!cardProps.subcard) {
      return <Card key={index} cardProps={cardProps} />;
    }
    return <CardSmall key={index} cardProps={cardProps} />;
  });

  return (
    <>
      <div
        ref={ref}
        className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center"
      >
        {featuredStoryCards}
      </div>
    </>
  );
}
