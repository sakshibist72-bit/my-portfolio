import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const features = [
  {
    icon: "🤖",
    title: "AI Agricultural Chatbot",
    description: "Chat with our AI to get instant farming advice and answers to all your agricultural questions.",
  },
  {
    icon: "🌿",
    title: "Crop Disease Identification",
    description: "Upload crop images and let AI detect diseases early to protect your harvest.",
  },
  {
    icon: "🧪",
    title: "Fertilizer Recommendation",
    description: "Get customized fertilizer suggestions based on your soil type and crop needs.",
  },
  {
    icon: "📅",
    title: "Smart Crop Calendar",
    description: "Plan your entire crop cycle with AI-powered scheduling for sowing, irrigation and harvest.",
  },
  {
    icon: "📦",
    title: "Post Harvesting Guidance",
    description: "Get expert tips on storage, packaging and selling your produce for maximum profit.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-purple-700 mb-10 text-center">
          What We Offer
        </h2>
        {/* 5 Circles in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {features.map((f, i) => (
            <Card key={i} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}