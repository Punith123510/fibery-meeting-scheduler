import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Calendar = ({ onDateChange, onTimeChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // November 30, 2023
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Call parent function to update selected date in form
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    onTimeChange(time); // Call parent function to update selected time in form
  };

  const renderDayLabels = () => {
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayLabels.map((label) => (
      <div key={label} className="text-gray-500 text-sm">
        {label}
      </div>
    ));
  };

  const renderDays = () => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const days = [];
  
    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<div key={`empty-${j}`} className="text-gray-300 text-sm"></div>);
        } else if (day > daysInMonth) {
          week.push(<div key={`empty-${i}-${j}`} className="text-gray-300 text-sm"></div>);
        } else {
          const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
          const isCurrentDate = date.toDateString() === new Date().toDateString();
          const isSelectedDate = date.toDateString() === selectedDate.toDateString();
  
          week.push(
            <div
              key={day}
              className={`text-sm cursor-pointer ${isSelectedDate ? 'bg-blue-500 text-white rounded-full' : ''} ${
                isCurrentDate ? 'text-blue-500 font-bold' : ''
              }`}
              onClick={() => handleDateChange(date)}
            >
              {day}
            </div>
          );
          day++;
        }
      }
      days.push(
        <div key={i} className="grid grid-cols-7 gap-1">
          {week}
        </div>
      );
    }
  
    return days;
  };
  
    
  const availableTimes = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
  ];
    
  const handleTimeZoneChange = (e) => {
    // Handle the change in time zone here if needed
    console.log("Selected time zone:", e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 ">Select a Date &amp; Time</h2>
      <div className="flex">
        <div className="mr-4">
          <div className="flex items-center mb-2">
            <button type="button"
              onClick={() =>
                handleDateChange(
                  new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
                )
              }
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className="mx-2 text-gray-700 font-bold">
              {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button type="button"
              onClick={() =>
                handleDateChange(
                  new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
                )
              }
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {renderDayLabels()}
          </div>
          {renderDays()}
        </div>
        <div>
          <div className="mb-4">
            <p className="text-gray-700 font-bold">
              {selectedDate.toLocaleDateString('default', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-500">Time zone</p>
            <select
              onChange={handleTimeZoneChange}
              className="border border-gray-300 rounded-md px-3 py-2"
            >
              <option>UK, Ireland, Lisbon Time (16:55)</option>
            </select>
          </div>
          <div>
            {availableTimes.map((time) => (
              <button type="button"
                key={time}
                onClick={() => handleTimeChange(time)}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
