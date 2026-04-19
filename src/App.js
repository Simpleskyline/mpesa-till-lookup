import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    setTimeout(() => {
      const mockData = {
        522522: {
          name: "Safaricom PLC",
          type: "Paybill",
          till: "522522",
          category: "Telecoms",
        },
        400200: {
          name: "KCB Bank",
          type: "Paybill",
          till: "400200",
          category: "Banking",
        },
        247247: {
          name: "Equity Bank",
          type: "Paybill",
          till: "247247",
          category: "Banking",
        },
        "000000": {
          name: "Test Business",
          type: "Till Number",
          till: "000000",
          category: "Retail",
        },
      };

      const found = mockData[query.trim()];

      if (found) {
        setResult(found);
      } else {
        setError(
          "No business found for that number. Try 522522, 400200 or 247247.",
        );
      }

      setLoading(false);
    }, 1500);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8 gap-6">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold text-green-400 mb-2">
          M-Pesa Till Lookup
        </h1>
        <p className="text-gray-500 text-sm">
          Search any till or paybill number
        </p>
      </div>

      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        loading={loading}
        onKeyDown={handleKeyDown}
      />

      {loading && <LoadingSpinner />}

      {error && (
        <div className="w-full max-w-md bg-red-900/30 border border-red-700 rounded-xl p-4">
          <p className="text-red-400 text-sm text-center">{error}</p>
        </div>
      )}

      {result && <ResultCard data={result} />}
    </div>
  );
}

export default App;
