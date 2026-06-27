import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Button, Input, Modal, Loader, showToast } from "../components/ui/index";

export default function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const handleInputTest = () => {
    if (!inputValue) {
      setInputError("This field cannot be empty!");
    } else {
      setInputError("");
      showToast("Input saved successfully!", "success");
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-10 text-center">
          Component Library Demo
        </h1>

        {/* BUTTONS */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
            🔘 Button Component
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="sm">Primary Small</Button>
            <Button variant="primary" size="md">Primary Medium</Button>
            <Button variant="primary" size="lg">Primary Large</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="outline" size="md">Outline</Button>
            <Button variant="primary" size="md" disabled>Disabled</Button>
          </div>
        </section>

        {/* INPUT */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
            📝 Input Component
          </h2>
          <div className="max-w-md flex flex-col gap-4">
            <Input
              label="Crop Name"
              placeholder="Enter crop name..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              error={inputError}
            />
            <Button variant="primary" onClick={handleInputTest}>Test Input</Button>
          </div>
        </section>

        {/* MODAL */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
            🪟 Modal Component
          </h2>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Crop Advisory Modal"
          >
            <p>This is a modal window! Press Escape or click ✕ to close it.</p>
            <div className="mt-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Close</Button>
            </div>
          </Modal>
        </section>

        {/* TOAST */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
            🔔 Toast Component
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" onClick={() => showToast("Success message!", "success")}>
              Success Toast
            </Button>
            <Button variant="outline" onClick={() => showToast("Error message!", "error")}>
              Error Toast
            </Button>
            <Button variant="secondary" onClick={() => showToast("Info message!", "info")}>
              Info Toast
            </Button>
          </div>
        </section>

        {/* LOADER */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">
            ⏳ Loader Component
          </h2>
          <div className="flex gap-10 items-center">
            <div>
              <p className="text-gray-500 text-sm mb-2">Small</p>
              <Loader size="sm" />
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">Medium</p>
              <Loader size="md" />
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">Large</p>
              <Loader size="lg" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}