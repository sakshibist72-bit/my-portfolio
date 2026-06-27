
/**
 * @param {boolean} isOpen
 * @param {function} onClose
 * @param {string} title
 * @param {ReactNode} children
 */
import { useEffect } from "react";
export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-700 dark:text-purple-300">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl font-bold">✕</button>
        </div>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
}
