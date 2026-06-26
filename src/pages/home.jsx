import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const features = [
  {
    icon: "🌱",
    title: "Crop Recommendations",
    description: "Get AI-based crop suggestions based on your soil and region.",
  },
  {
    icon: "🌦️",
    title: "Weather Insights",
    description: "Understand how weather affects your crop yield and planning.",
  },
  {
    icon: "🪲",
    title: "Pest & Disease Alerts",
    description: "Early warnings about pests and diseases affecting your crops.",
  },
  {
    icon: "💧",
    title: "Irrigation Guidance",
    description: "Smart water management tips tailored to your crop type.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-1 px-6 py-10 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Card key={i} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
