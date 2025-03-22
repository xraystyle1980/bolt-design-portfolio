import { PlaygroundCard } from './PlaygroundCard';

interface Insight {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const insights: Insight[] = [
  {
    id: 'threejs-experiments',
    title: 'Three.js experiments',
    description: "Playing with web and 3D—because the internet shouldn't be boring. These are my experiments with Three.js, shaders, and interactive visuals. Click around, drag stuff, break it—go wild.",
    imageUrl: '/images/playground-3dtoken.png',
    link: '/playground/threejs'
  },
  {
    id: 'design-system-demo',
    title: 'Design System Demo',
    description: 'Bridging the gap between design and dev. This is a live demo of a design system workflow, where Figma tokens sync to real code. See how changes update in real-time, tweak components, and explore the system in action.',
    imageUrl: '/images/decent-design-system-hero-collage.png',
    link: '/playground/design-system'
  }
];

export function Insights() {
  return (
    <section className="py-24">
      <h2 className="text-display-2xl text-neutral-500 mb-10">
        Playground
      </h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {insights.map((insight) => (
          <PlaygroundCard
            key={insight.id}
            imageUrl={insight.imageUrl}
            title={insight.title}
            description={insight.description}
            link={insight.link}
          />
        ))}
      </div>
    </section>
  );
}