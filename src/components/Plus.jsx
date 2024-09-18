import React, { useState } from "react";
import Foreground from './Foreground';

const Plus = () => {
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  const handlePlusClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = () => {
    if (description.length > 0) {
      const newCard = {
        id: cardsData.length + 1, // Unique id
        desc: description,
        filesize: description.length < 40 ? ".4mb" : ".9mb",
        close: true,
        tagDetails: { 
          isOpen: true, 
          tagTitle: "Character Length: " + description.length, 
          tagColor: description.length < 40 ? "green" : "blue" 
        }
      };
      setCardsData([...cardsData, newCard]);
      setDescription('');
      setIsFormVisible(false);
    }
  };

  const handleRemoveCard = (id) => {
    const updatedCards = cardsData.filter((card) => card.id !== id);
    setCardsData(updatedCards);
  };

  return (
    <>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={handlePlusClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          +
        </button>
      </div>

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

      <Foreground cardsData={cardsData} handleRemoveCard={handleRemoveCard} />
    </>
  );
};

export default Plus;
