import React from 'react';

const DetailsForm = ({
  name,
  email,
  teamSize,
  roles,
  onNameChange,
  onEmailChange,
  onTeamSizeChange,
  onRoleChange
}) => {
  return (
    <div className="details-form">
      <div>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <button>Add Guests</button>
      <div>
        <p>I want Fibery to work for: *</p>
        <div>
          <input
            type="radio"
            id="myself"
            name="team-size"
            value="Myself"
            checked={teamSize === 'Myself'}
            onChange={onTeamSizeChange}
          />
          <label htmlFor="myself">Myself</label>
        </div>
        <div>
          <input
            type="radio"
            id="small-team"
            name="team-size"
            value="< 10 people"
            checked={teamSize === '< 10 people'}
            onChange={onTeamSizeChange}
          />
          <label htmlFor="small-team">&#60; 10 people</label>
        </div>
        <div>
          <input
            type="radio"
            id="medium-team"
            name="team-size"
            value="10-50 people"
            checked={teamSize === '10-50 people'}
            onChange={onTeamSizeChange}
          />
          <label htmlFor="medium-team">10-50 people</label>
        </div>
        <div>
          <input
            type="radio"
            id="large-team"
            name="team-size"
            value="> 50+ people"
            checked={teamSize === '> 50+ people'}
            onChange={onTeamSizeChange}
          />
          <label htmlFor="large-team">&#62; 50+ people</label>
        </div>
      </div>
      <div>
        <p>You are more about *</p>
        <div>
          <input
            type="checkbox"
            id="leadership"
            value="Leadership"
            checked={roles.includes('Leadership')}
            onChange={onRoleChange}
          />
          <label htmlFor="leadership">Leadership</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="consulting"
            value="Consulting"
            checked={roles.includes('Consulting')}
            onChange={onRoleChange}
          />
          <label htmlFor="consulting">Consulting</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="product-management"
            value="Product Management"
            checked={roles.includes('Product Management')}
            onChange={onRoleChange}
          />
          <label htmlFor="product-management">Product Management</label>
        </div>
        {/* Add more checkboxes for other roles */}
      </div>
      <div>
        <label htmlFor="additional-info">
          Please, share anything that will help prepare for our meeting
        </label>
        <textarea id="additional-info"></textarea>
      </div>
      <div>
        <label htmlFor="workspace-name">
          Please, share with us the name of your Fibery workspace (if any)
        </label>
        <input type="text" id="workspace-name" />
      </div>
      <button>Schedule Event</button>
    </div>
  );
};

export default DetailsForm;