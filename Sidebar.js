import React from 'react';
import './styles.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><i className="fas fa-home"></i> Home</li>
        <li><i className="fas fa-university"></i> On Campus Opportunities</li>
        <li><i className="fas fa-users"></i> Alumni Network</li>
        <li><i className="fas fa-chalkboard-teacher"></i> Mentor Network</li>
        <li><i className="fas fa-file-alt"></i> Resume Builder</li>
        <li><i className="fas fa-trophy"></i> Achievements</li>
        <li><i className="fas fa-cog"></i> Settings</li>
        <li><i className="fas fa-envelope"></i> Messages</li>
      </ul>
    </div>
  );
};

export default Sidebar;
