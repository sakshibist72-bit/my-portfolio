export default function Card({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circle */}
      <div className="w-40 h-40 rounded-full bg-purple-100 border-4 border-purple-400 flex flex-col items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
        <div className="text-4xl mb-1">{icon}</div>
        <h3 className="text-sm font-bold text-purple-800 px-2 leading-tight">{title}</h3>
      </div>
      {/* Description below circle */}
      <p className="text-gray-500 text-sm mt-3 max-w-xs">{description}</p>
    </div>
  );
}