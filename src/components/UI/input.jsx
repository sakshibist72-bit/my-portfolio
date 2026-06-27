
/**
 * @param {string} label
 * @param {string} placeholder
 * @param {string} type
 * @param {string} value
 * @param {function} onChange
 * @param {string} error
 */
export default function Input({ label, placeholder, type = "text", value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-white ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
