function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full mb-6 flex justify-center">
      <div className="relative w-full max-w-xl">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search photos by author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
    </div>
  );
}

export default SearchBar;
