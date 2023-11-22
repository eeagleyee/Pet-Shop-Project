import React, { useState, useEffect } from "react";
import { petData } from "../data"; // Importing pet data from an external file
import PetCard from "./PetCard"; // Importing the PetCard component
import Navbar from "./Navbar"; // Importing the Navbar component

const PetList = () => {
  // State to manage the list of pets and filters
  const [pets, setPets] = useState(petData); // State to store the pets list
  const [filters, setFilters] = useState({
    // State to store filter values
    race: "", // Filter for race
    type: "", // Filter for type
    location: "", // Filter for location
  });

  // UseEffect to filter pets when filters change
  useEffect(() => {
    // Filter the pets based on the applied filters
    const filteredPets = petData.filter((pet) => {
      return (
        pet.race.toLowerCase().includes(filters.race.toLowerCase()) &&
        pet.type.toLowerCase().includes(filters.type.toLowerCase()) &&
        pet.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    });
    setPets(filteredPets); // Update pets state with the filtered pets
  }, [filters]); // useEffect runs when the 'filters' state changes

  // Function to handle race filter changes
  const handleRaceFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      race: value.trim(),
    }));
  };

  // Function to handle type filter changes
  const handleTypeFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      type: value.trim(),
    }));
  };

  // Function to handle location filter changes
  const handleLocationFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: value.trim(),
    }));
  };

  // Handler for adopting a pet
  const handleAdopt = (id) => {
    // Logic for pet adoption
    // Modify the pet's status or perform other actions upon adoption
  };

  return (
    <div>
      {/* Navbar component with filter input fields */}
      <Navbar
        handleRaceFilter={handleRaceFilter} // Pass function to handle race filter
        handleTypeFilter={handleTypeFilter} // Pass function to handle type filter
        handleLocationFilter={handleLocationFilter} // Pass function to handle location filter
      />
      {/* Display pet cards based on filtered or original petData */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* Map through filtered or original pets and render PetCard component */}
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} onAdopt={() => handleAdopt(pet.id)} />
          // Render each PetCard passing props and adopt function as onAdopt prop
        ))}
      </div>
    </div>
  );
};

export default PetList; // Export the PetList component
