import React, { useState } from 'react';
import Calendar from './Calendar';
import calculateEndTime from './calculateEndTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import '../App.css'


const Page1 = ({ onNext, handleDateChange, handleTimeChange }) => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="bg-gray-100 p-0">
        <h2 className="text-2xl font-bold mb-4 mt-9">Fibery Demo</h2>
        <p className="mb-1">
        <FontAwesomeIcon icon={faClock} className="mr-2" />  45 min
        </p>
        <p className='text-sm'>
          Book a meeting with our Fibery team.<br /> 
          Talk to a real person about how to get<br/>
          your processes set up with us or not.
        </p>
      </div>
      <div className="w-3/4 p-6">
        <Calendar onDateChange={handleDateChange} onTimeChange={handleTimeChange} />
        {/* Form content */}
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 absolute bottom-0 right-4"
        >
          Next <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const Page2 = ({ onNext, handleDateChange, handleTimeChange, handleSubmit, name, email, companySize, interests, workspaceName, setName, setEmail, setCompanySize, setInterests, setWorkspaceName }) => {
    const handleCheckboxChange = (value) => {
        if (companySize.includes(value)) {
          setCompanySize(companySize.filter((item) => item !== value));
        } else {
          setCompanySize([...companySize, value]);
        }
      };
       return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Fibery Demo</h2>
        <p className="mb-2">
        <FontAwesomeIcon icon={faClock} className="mr-2" />  45 min
        </p>
        <p>
          Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us or not.
        </p>
      </div>
      <div className="w-3/4 p-4">
      <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">I want Fibery to work for: *</label>
          <div className="flex items-left flex-col space-x-4">
          <div>
  <input
    type="checkbox"
    id="myself"
    value="myself"
    checked={companySize.includes('myself')}
    onChange={(e) => handleCheckboxChange(e.target.value)}
    className="mr-2"
  />
  <label htmlFor="myself" className="text-gray-700">Myself</label>
</div>
<div>
  <input
    type="checkbox"
    id="upTo10"
    value="< 10 people"
    checked={companySize.includes('< 10 people')}
    onChange={(e) => handleCheckboxChange(e.target.value)}
    className="mr-2"
  />
  <label htmlFor="upTo10" className="text-gray-700">{'< 10 people'}</label>
</div>
<div>
  <input
    type="checkbox"
    id="tenToFifty"
    value="10-50 people"
    checked={companySize.includes('10-50 people')}
    onChange={(e) => handleCheckboxChange(e.target.value)}
    className="mr-2"
  />
  <label htmlFor="tenToFifty" className="text-gray-700">10-50 people</label>
</div>
<div>
  <input
    type="checkbox"
    id="overFifty"
    value="50+ people"
    checked={companySize.includes('50+ people')}
    onChange={(e) => handleCheckboxChange(e.target.value)}
    className="mr-2"
  />
  <label htmlFor="overFifty" className="text-gray-700">50+ people</label>
</div>
</div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">You are more about *</label>
          <div className="flex flex-wrap flex-col">
            <div className="mr-4 mb-2">
              <input
                type="checkbox"
                id="leadership"
                value="Leadership"
                checked={interests.includes('Leadership')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setInterests([...interests, 'Leadership']);
                  } else {
                    setInterests(interests.filter((interest) => interest !== 'Leadership'));
                  }
                }}
                className="mr-2"
              />
              <label htmlFor="leadership" className="text-gray-700">Leadership</label>
            </div>
            <div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="consulting"
    value="Consulting"
    checked={interests.includes('Consulting')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Consulting']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Consulting'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="consulting" className="text-gray-700">Consulting</label>
</div>

<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="productManagement"
    value="Product Management"
    checked={interests.includes('Product Management')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Product Management']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Product Management'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="productManagement" className="text-gray-700">Product Management</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="design"
    value="Design"
    checked={interests.includes('Design')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Design']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Design'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="design" className="text-gray-700">Design</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="engineering"
    value="Engineering"
    checked={interests.includes('Engineering')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Engineering']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Engineering'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="engineering" className="text-gray-700">Engineering</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="sales"
    value="Sales"
    checked={interests.includes('Sales')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Sales']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Sales'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="sales" className="text-gray-700">Sales</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="marketing"
    value="Marketing"
    checked={interests.includes('Marketing')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Marketing']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Marketing'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="marketing" className="text-gray-700">Marketing</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="humanResources"
    value="Human Resources"
    checked={interests.includes('Human Resources')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Human Resources']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Human Resources'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="humanResources" className="text-gray-700">Human Resources</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="education"
    value="Education"
    checked={interests.includes('Education')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Education']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Education'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="education" className="text-gray-700">Education</label>
</div>
<div className="mr-4 mb-2">
  <input
    type="checkbox"
    id="somethingElse"
    value="Something else"
    checked={interests.includes('Something else')}
    onChange={(e) => {
      if (e.target.checked) {
        setInterests([...interests, 'Something else']);
      } else {
        setInterests(interests.filter((interest) => interest !== 'Something else'));
      }
    }}
    className="mr-2"
  />
  <label htmlFor="somethingElse" className="text-gray-700">Something else</label>
</div>
</div>
</div>
<div className="mb-4">
  <label htmlFor="workspaceName" className="block font-bold mb-2">Please, share with us the name of your Fibery workspace (if any)</label>
  <input
    type="text"
    id="workspaceName"
    value={workspaceName}
    onChange={(e) => setWorkspaceName(e.target.value)}
    className="border border-gray-300 rounded-md px-3 py-2 w-full"
  />
</div>


<button
  type="submit"
  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
>
  Schedule Event
</button>
</form>
      </div>
    </div>
  );
};

const SuccessModal = ({ onClose, name, selectedDate, selectedTime }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <img src="/success.png" alt="Success" className="h-8 mr-4" />
          <h2 className="text-2xl font-bold">You are scheduled</h2>
        </div>
        <p className="mb-4">A calendar invitation has been sent to your email address.</p>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="font-bold">{name}</p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="ml-2">
              {selectedTime} - {calculateEndTime(selectedTime, selectedDate)} on{' '}
              {selectedDate.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEarthAsia} />
            <span className="ml-2">UK, Ireland, Lisbon Time</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faVideo} />
            <span className="ml-2">Web conferencing details to follow.</span>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const SchedulingForm = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('10-50 people');
  const [interests, setInterests] = useState(['Product Management', 'Sales', 'Human Resources', 'Education']);
  const [workspaceName, setWorkspaceName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, companySize, interests, workspaceName, selectedDate, selectedTime });
    setShowSuccessModal(true);
  };
  

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Page1 onNext={handleNext} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} />;
      case 2:
        return <Page2 onNext={handleNext} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} handleSubmit={handleSubmit} name={name} email={email} companySize={companySize} interests={interests} workspaceName={workspaceName} setName={setName} setEmail={setEmail} setCompanySize={setCompanySize} setInterests={setInterests} setWorkspaceName={setWorkspaceName} />;
      // Render additional pages as needed...
      default:
        return <Page1 onNext={handleNext} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} />;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {showSuccessModal ? (
        <SuccessModal onClose={() => setShowSuccessModal(false)} name={name} selectedDate={selectedDate} selectedTime={selectedTime} />
      ) : (
        renderPage()
      )}
    </div>
  );
};

export default SchedulingForm;
