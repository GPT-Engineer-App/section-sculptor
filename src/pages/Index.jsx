import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageCard from '../components/ImageCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-b from-orange-100 to-transparent pb-32">
        <Header />
        <Hero />
      </div>
      <ImageCard />
      <div className="fixed top-0 left-0 w-full bg-orange-100 text-orange-600 py-1 px-4 text-center">
        <span className="mr-2">AI Features coming soon</span>
        <span className="font-bold">10 courses in one for $9.99</span>
      </div>
    </div>
  );
};

export default Index;
