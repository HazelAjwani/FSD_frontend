import React from 'react';
import './styles.css';

const Notifications = () => {
  return (
    <div className="notifications">
      <h4>Notifications</h4>
      <ul>
        <li>
          <i className="fas fa-user-circle icon"></i>
          <div className="notification-content">
            <p>Ellie wants to connect</p>
            <small>6 Apr, 2021 10:00 AM</small>
          </div>
        </li>
        <li>
          <i className="fas fa-user-circle icon"></i>
          <div className="notification-content">
            <p>Cosmos Club tagged you in a post</p>
            <small>6 Apr, 2021 10:00 AM</small>
          </div>
        </li>
        <li>
          <i className="fas fa-user-circle icon"></i>
          <div className="notification-content">
            <p>One day left! Register now!</p>
            <small>6 Apr, 2021 10:00 AM</small>
          </div>
        </li>
        <li>
          <i className="fas fa-user-circle icon"></i>
          <div className="notification-content">
            <p>Robert joined team design</p>
            <small>6 Apr, 2021 10:00 AM</small>
          </div>
        </li>
        <li>
          <i className="fas fa-user-circle icon"></i>
          <div className="notification-content">
            <p>Jack joined team design</p>
            <small>6 Apr, 2021 10:00 PM</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
