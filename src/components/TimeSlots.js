// TimeSlots.js
import React from 'react';

const TimeSlots = ({ selectedDate }) => {
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00'
  ];

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{formatDate(selectedDate)}</h2>
      <div className="grid grid-cols-2 gap-2">
        {timeSlots.map((slot) => (
          <div
            key={slot}
            className="time-slot bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-lg shadow text-center cursor-pointer"
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;