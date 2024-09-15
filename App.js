import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Notifications from './Notifications';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  return (
    <div className="container-fluid">
      {/* Header */}
      <Header />

      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2">
          <Sidebar />
        </div>

        {/* Dashboard Content */}
        <div className="col-md-8">
          <Dashboard />
        </div>

        {/* Notifications */}
        <div className="col-md-2">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default App;
