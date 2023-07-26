import { useState } from "react";

const FilterEmployee = ({ categories, onSelectStatus }) => {
  const [filteredData, setFilteredData] = useState(categories);

  const handleFilterChange = (selectedName) => {
    if (selectedName === "") {
      setFilteredData(categories);
    } else {
      const filteredItems = categories.filter(
        (item) => item.name === selectedName
      );
      setFilteredData(filteredItems);
    }
  };
  return (
    <div>
      <select
        className="border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onSelectStatus(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterEmployee;
