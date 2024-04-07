import React from 'react';

const DatePicker = ({ selectedDate, onDateChange }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const renderDays = () => {
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const days = [];

    for (let i = 1; i <= daysInMonth(month, year); i++) {
      const date = new Date(year, month, i);
      const isSelected = date.getDate() === selectedDate.getDate();
      const className = isSelected ? 'selected' : '';

      days.push(
        <div
          key={i}
          className={className}
          onClick={() => onDateChange(date)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="date-picker">
      <div className="month-year">
        {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
      </div>
      <div className="days-grid">{renderDays()}</div>
    </div>
  );
};

export default DatePicker;