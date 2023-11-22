// Importing necessary modules
import React from "react";

// Navbar component to handle filters for race, type, and location
const Navbar = ({
  handleRaceFilter, // Function to handle race filter changes
  handleTypeFilter, // Function to handle type filter changes
  handleLocationFilter, // Function to handle location filter changes
}) => {
  // Handle race filter input change
  const handleRaceInputChange = (e) => {
    handleRaceFilter(e.target.value); // Pass the race filter value to the provided function
  };

  // Handle type filter input change
  const handleTypeInputChange = (e) => {
    handleTypeFilter(e.target.value); // Pass the type filter value to the provided function
  };

  // Handle location filter input change
  const handleLocationInputChange = (e) => {
    handleLocationFilter(e.target.value); // Pass the location filter value to the provided function
  };

  return (
    // Navbar HTML structure
    <nav className="bg-white-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            className="h-32 w-32 rounded-full mr-2 color"
            src="images/brandlogo.png"
            alt="Logo"
          />
          <span className="text-orange-700 text-2g font-bold">My PET Shop</span>
        </div>

        {/* Filters for race, type, and location */}
        <div className="flex">
          {/* Input for race filter */}
          <input
            type="text"
            placeholder="Search by race..."
            className="bg-gray-200 rounded-lg px-4 py-2 mr-4 focus:outline-none"
            onChange={handleRaceInputChange} // Handle race filter input changes
          />
          {/* Input for type filter */}
          <input
            type="text"
            placeholder="Search by type..."
            className="bg-gray-200 rounded-lg px-4 py-2 mr-4 focus:outline-none"
            onChange={handleTypeInputChange} // Handle type filter input changes
          />
          {/* Input for location filter */}
          <input
            type="text"
            placeholder="Search by location..."
            className="bg-gray-200 rounded-lg px-4 py-2 mr-4 focus:outline-none"
            onChange={handleLocationInputChange} // Handle location filter input changes
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component
