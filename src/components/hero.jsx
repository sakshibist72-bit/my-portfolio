export default function Hero() {
  return (
    <div className="bg-green-50 text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-green-800 mb-4">
        AI-Powered Crop Advisory
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Get personalized farming advice powered by artificial intelligence.
        Ask about crops, soil, weather, and more.
      </p>
      <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
        Get Started
      </button>
    </div>
  );
}
