import React from 'react';

const Card = ({ icon, label, count }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center w-60">
      <div className="text-teal-600 text-3xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold">{count}</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

export default Card;
