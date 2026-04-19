function SearchBar({ value, onChange, onSearch, loading }) {
  return (
    <div className="w-full max-w-md">
      <p className="text-gray-400 text-sm mb-6 text-center">
        Enter a till number or paybill to look up business details
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="e.g. 522522"
          className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 text-sm"
        />
        <button
          onClick={onSearch}
          disabled={loading || !value.trim()}
          className="bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold px-5 py-3 rounded-xl text-sm transition-colors"
        >
          {loading ? "..." : "Search"}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
