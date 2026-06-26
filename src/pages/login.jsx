import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-md mx-auto w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Login</h1>
        <p className="text-gray-600 mb-6">
          Sign in to access your personalized crop advisory dashboard.
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />
          <button className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
            Login
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
