import React from "react";

const CompanyTable = ({ companies }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {companies.length === 0 ? (
        <div className="py-10 text-center text-gray-500 text-lg font-medium">
          No data found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[350px]">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-3 text-left whitespace-nowrap">Name</th>
                <th className="p-3 text-left whitespace-nowrap">Location</th>
                <th className="p-3 text-left whitespace-nowrap">Industry</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c) => (
                <tr key={c.id} className="border-t hover:bg-blue-50">
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">{c.location}</td>
                  <td className="p-3">{c.industry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanyTable;
