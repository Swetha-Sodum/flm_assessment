import React from "react";
import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import CompanyTable from "./components/CompanyTable";
import { Loader } from "./components/Loader";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/companies.json");
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        const data = await response.json();
        setCompanies(data);
        setFiltered(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    let list = [...companies];

    if (industry) list = list.filter((c) => c.industry === industry);
    if (location) list = list.filter((c) => c.location === location);
    if (search) {
      list = list.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    list.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFiltered(list);
  }, [industry, location, search, sortOrder, companies]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-red-600">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Companies Directory
      </h1>

      <Filters
        industry={industry}
        location={location}
        sortOrder={sortOrder}
        search={search}
        onIndustryChange={setIndustry}
        onLocationChange={setLocation}
        onSortOrderChange={setSortOrder}
        onSearchChange={setSearch}
      />

      <CompanyTable companies={filtered} />
    </div>
  );
};

export default App;
