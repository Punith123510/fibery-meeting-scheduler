import React from 'react';

const TimePicker = ({ selectedTime, onTimeChange }) => {
  const times = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'
  ];

  return (
    <div className="time-picker">
      {times.map(time => (
        <div
          key={time}
          className={time === selectedTime ? 'selected' : ''}
          onClick={() => onTimeChange(time)}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimePicker;