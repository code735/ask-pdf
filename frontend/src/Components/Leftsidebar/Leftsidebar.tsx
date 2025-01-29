import React, { useState } from "react";
import "./LeftSidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import Person4Icon from '@mui/icons-material/Person4';
import SettingsIcon from '@mui/icons-material/Settings';

const LeftSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button className="menu-button" onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>
      <nav className="menu">
        <a href="/" className="menu-item">
          <HomeIcon />
          <span className="menu-text">Home</span>
        </a>
        <a href="/" className="menu-item">
          <Person4Icon />
          <span className="menu-text">Profile</span>
        </a>
        <a href="/" className="menu-item">
          <SettingsIcon />
          <span className="menu-text">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default LeftSidebar;
