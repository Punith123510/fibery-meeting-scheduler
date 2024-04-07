// MeetingDetails.js
import React from 'react';
import fiberyLogo from '../assets/fibery-logo.svg.png';

const formatDate = (date) => {
  // Your date formatting logic here
  return date.toLocaleDateString(); // Example formatting
};

const MeetingDetails = ({ selectedDate, selectedTime }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="flex items-center mb-4">
        <img src={fiberyLogo} alt="Fibery Logo" className="h-8 mr-2" />
        <h2 className="text-lg font-semibold">Fibery Demo</h2>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-semibold">45 min</span>
      </p>
      <p className="text-gray-700 mb-4">
        Book a meeting with our Fibery team. Talk to a real person about how to
        get your processes set up with us or not.
      </p>
      {selectedDate && selectedTime && (
        <div className="text-gray-700">
          <p>Selected Date: {formatDate(selectedDate)}</p>
          <p>Selected Time: {selectedTime}</p>
        </div>
      )}
    </div>
  );
};

export default MeetingDetails;