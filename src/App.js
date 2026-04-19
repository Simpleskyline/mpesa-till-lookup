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

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

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
      200999: {
        name: "M-Shwari",
        type: "Paybill",
        till: "200999",
        category: "Banking",
      },
      303030: {
        name: "Airtel Money",
        type: "Paybill",
        till: "303030",
        category: "Telecoms",
      },
      888880: {
        name: "Kenya Power",
        type: "Paybill",
        till: "888880",
        category: "Utilities",
      },
      888888: {
        name: "Nairobi Water",
        type: "Paybill",
        till: "888888",
        category: "Utilities",
      },
      290290: {
        name: "Faulu Microfinance",
        type: "Paybill",
        till: "290290",
        category: "Banking",
      },
      101010: {
        name: "Stanbic Bank",
        type: "Paybill",
        till: "101010",
        category: "Banking",
      },
      "000000": {
        name: "Test Business",
        type: "Till Number",
        till: "000000",
        category: "Retail",
      },
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const found = mockData[query.trim()];
      if (found) {
        setResult(found);
      } else {
        setError(
          "Till number not found. Please check the number and try again.",
        );
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
