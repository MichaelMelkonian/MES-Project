import React from 'react';
import './Sidebar.css'; // Importing the CSS
import SidebarList from './SidebarList';
const Sidebar = () => {
return (
        <div className="sidebar open">
            {/* Sidebar content goes here */}
             {/* Create list like structure that allows for nested links*/}
             <SidebarList />
             

        </div>
    );
};

export default Sidebar;
