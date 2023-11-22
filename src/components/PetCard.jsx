import React, { useState } from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

// PetCard component displaying pet information and adopt button
const PetCard = ({ location, name, photo, race, type }) => {
  // State to track if the pet has been adopted
  const [isAdopted, setIsAdopted] = useState(false);

  // Function to handle adoption button click
  const handleAdopt = () => {
    // Update the adoption status to true when the button is clicked
    setIsAdopted(true);
  };

  return (
    <Card
      hoverable
      style={{ width: 300, margin: "20px" }}
      cover={<img alt={name} src={photo} style={{ height: 220 }} />}
    >
      <Meta
        title={name}
        description={`Race: ${race} | Type: ${type} | Location: ${location}`}
      />
      {/* Conditional rendering based on adoption status */}
      {!isAdopted ? (
        // Button for adoption if the pet is not adopted
        <Button
          type="primary"
          style={{ marginTop: "10px" }}
          onClick={handleAdopt} // Handle click event for adoption
        >
          Adopt
        </Button>
      ) : (
        // Button disabled if the pet is already adopted
        <Button disabled style={{ marginTop: "10px" }}>
          Adopted
        </Button>
      )}
    </Card>
  );
};

export default PetCard;
