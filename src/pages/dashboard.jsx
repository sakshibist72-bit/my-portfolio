import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 text-lg">
          Your personalized dashboard will show crop history, AI advice logs,
          and weather summaries. This section will be connected to the backend in
          Week 3.
        </p>
      </main>
      <Footer />
    </div>
  );
}
