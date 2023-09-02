import React from 'react';
import { Link } from 'react-router-dom';

const InternshipCard = ({ title, description, available }) => {
  return (
    <div className="bg-customCyan shadow-xl w-full xl:w-10/12 rounded-lg p-6 flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href='/login'
        className={`ml-auto rounded-lg ${
          available ? 'bg-customGreen shadow-md hover:shadow-lg' : 'bg-gray-300 cursor-not-allowed'
        } text-white py-2 px-4 rounded`}
        disabled={!available}
      >
        Apply
      </a>
    </div>
  );
};

export default InternshipCard;
