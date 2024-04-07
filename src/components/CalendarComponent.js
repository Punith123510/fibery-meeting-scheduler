// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimeSlots from './TimeSlots';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Select a Date & Time</h2>
      <div className="flex">
        <div className="mr-6">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="bg-gray-100 rounded-lg shadow"
          />
        </div>
        <TimeSlots selectedDate={date} />
      </div>
    </div>
  );
};

export default CalendarComponent;