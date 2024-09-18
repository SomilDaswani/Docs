import React, { useState } from "react";
import Foreground from './Foreground'; // Import Foreground component

const Plus = () => {
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cardsData, setCardsData] = useState([]); // Initialize as empty array

  const handlePlusClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = () => {
    if (description.length > 0 && description.length < 40) {
        // Create a new card object
        const newCard = {
          desc: description,
          filesize: ".4mb",
          close: true,
          tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        };
        // Update the cardsData array to include the new card
        setCardsData([...cardsData, newCard]);
      
        // Reset form state
        setDescription('');
        setIsFormVisible(false);
      } else if (description.length >= 40) {
        const newCard = {
          desc: description,
          filesize: ".9mb",
          close: true,
          tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        };
        // Update the cardsData array to include the new card
        setCardsData([...cardsData, newCard]);
      
        // Reset form state
        setDescription('');
        setIsFormVisible(false);
      } 
    };
      

  return (
    <>
      {/* Plus Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={handlePlusClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          +
        </button>
      </div>

      {/* Form */}
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <input
            type="text"
            placeholder="Enter a description (Less than 20 words)"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={handleInputChange}
          />
          <button
            onClick={handleFormSubmit}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full"
          >
            Submit
          </button>
        </div>
      </div>
      
      )}

      {/* Foreground (to display the cards) */}
      <Foreground cardsData={cardsData} />
    </>
  );
};

export default Plus;
