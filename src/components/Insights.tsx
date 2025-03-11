import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'Mastering the Art of Color Theory: A Visual Designers Guide',
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=1000',
    description: 'Dive into the fascinating world of color theory...',
  },
  {
    title: 'Designing for User Experience: Creating Intuitive and Engaging Interfaces',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    description: 'Explore the keys of user experience design...',
  },
  {
    title: 'The Power of Typography in Visual Design: Guidelines and Impact',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    description: 'Discover the significance of typography...',
  },
];

export function Insights() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-neutral-100">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold">INSIGHTS</h2>
        <Button variant="outline" className="rounded-full">
          View All Insights <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <div key={index} className="group relative bg-white rounded-3xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
              <p className="text-neutral-600 text-sm">{insight.description}</p>
            </div>
            <Button
              variant="outline"
              className="absolute bottom-6 right-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}