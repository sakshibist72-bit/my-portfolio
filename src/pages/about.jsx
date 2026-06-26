import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-4">About CropAdvisor</h1>
        <p className="text-gray-600 text-lg">
CropAdvisor is an AI-powered chatbot built to help farmers make smarter
          decisions. It uses state-of-the-art AI to provide real-time crop advisory,
          pest alerts, and irrigation suggestions — all in one place.
        </p>
      </main>
      <Footer />
    </div>
  );
}
