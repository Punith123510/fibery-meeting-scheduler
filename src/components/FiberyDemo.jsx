import React from 'react';
import Calendar from './Calendar';
import SchedulingForm1 from './SchedulingForm1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faVideo, faGlobe } from '@fortawesome/free-solid-svg-icons';

const FiberyDemo = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Fibery Demo</h2>
        <p className="mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> 45 min
        </p>
        <p>
          Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us or not.
        </p>
      </div>

      {/* Center Content */}
      <div className="flex-1 p-4">
        
        <SchedulingForm1 />
      </div>
    </div>
  );
};

export default FiberyDemo;