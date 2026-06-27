export default function Hero() {
  return (
    <div className="bg-purple-50 dark:bg-gray-900 text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-4">
        AI-Powered Crop Advisory
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
        CropAdvisor is a smart farming assistant powered by Artificial Intelligence.
        It helps farmers and agricultural professionals make better decisions by
        providing real-time advice on crop selection, soil health, weather patterns,
        pest control, and irrigation management — all in one place.
      </p>
      <p className="text-md text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mb-6">
        Simply ask your farming question and get instant, AI-powered personalized
        recommendations powered by Gemini AI. Whether you are a small-scale
        farmer or a large agricultural business, CropAdvisor is built for you.
      </p>
      <button className="mt-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold shadow-md">
        Get Started
      </button>
    </div>
  );
}