import React, { useState } from 'react';
import './SidebarList.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inbox from './Inbox'; 
const SidebarList = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    // ... rest of your component logic
    const listItems = [
        { id: 1, title: 'Home', subItems: [{ title: 'Inbox', path: '/inbox' }, { title: 'Inbox', path: '/inbox' }] },
        { id: 2, title: 'Profile', subItems: [{ title: 'Dropdown', path: '/Dropdown' }, { title: 'Inbox', path: '/inbox' },{ title: 'SearchBar', path: '/SearchBar' }] },
        // ... other items with paths
    ];


    const handleItemClick = (itemId, subItemId = null) => {
        toggleExpand(itemId);
        setSelectedItem(subItemId || itemId);
    };
    const toggleExpand = (itemId) => {
        setExpandedItem(expandedItem === itemId ? null : itemId);
    };
    return (
      
        <ul className="sidebar-list">
            {listItems.map(item => (
                <li key={item.id} 
                    className={selectedItem === item.id ? 'selected' : ''}
                    onClick={() => handleItemClick(item.id)}>
                    <a href="#">{item.title}</a>
                    {expandedItem === item.id && (
                        <ul className="sub-list">
                           {item.subItems.map(subItem => (
                            <li key={subItem.title}
                                className={selectedItem === subItem.title ? 'selected' : ''}
                                onClick={() => handleItemClick(item.id, subItem.title)}>
                                <Link to={subItem.path}>{subItem.title}</Link>
                            </li>
                        ))}
                                                </ul>
                    )}
                </li>
            ))}
        </ul>
  
    );
};

export default SidebarList;
