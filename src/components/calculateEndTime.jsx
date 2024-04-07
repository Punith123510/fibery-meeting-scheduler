const calculateEndTime = (startTime, selectedDate) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endTime = new Date(selectedDate);
    endTime.setHours(hours + 0);
    endTime.setMinutes(minutes + 45);
    return endTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };
  
  export default calculateEndTime;
  