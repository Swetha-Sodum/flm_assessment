import React from "react";

const Filters = ({
  industry,
  location,
  sortOrder,
  search,
  onIndustryChange,
  onLocationChange,
  onSortOrderChange,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border p-2 rounded w-60"
      />

      <select
        value={industry}
        onChange={(e) => onIndustryChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Industries</option>
        <option value="Software">Software</option>
        <option value="Food">Food</option>
        <option value="Construction">Construction</option>
        <option value="Finance">Finance</option>
        <option value="Manufacturing">Manufacturing</option>
      </select>

      <select
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="asc">Sort A → Z</option>
        <option value="desc">Sort Z → A</option>
      </select>
    </div>
  );
};

export default Filters;
