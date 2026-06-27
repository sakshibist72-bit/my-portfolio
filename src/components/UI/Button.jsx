/**
 * @param {string} variant - primary | secondary | outline
 * @param {string} size - sm | md | lg
 * @param {boolean} disabled
 * @param {function} onClick
 */
export default function Button({ variant = "primary", size = "md", disabled = false, onClick, children }) {
  const base = "rounded-lg font-semibold transition duration-200";
  const sizes = { sm: "px-3 py-1 text-sm", md: "px-5 py-2 text-md", lg: "px-8 py-3 text-lg" };
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}