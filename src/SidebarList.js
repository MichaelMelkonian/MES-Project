import React, { useState } from 'react';
import './SidebarList.css';
import { Link } from 'react-router-dom';

const SidebarList = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    // ... rest of your component logic
    const listItems = [
        { id: 1, title: 'Home', subItems: ['Introduction', 'Latest Updates'] },
        { id: 2, title: 'Profile', subItems: ['Edit Profile', 'Settings'] },
        { id: 3, title: 'Messages', subItems: ['Inbox', 'Sent Items'] },
        // ... other items
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
                                <li key={subItem} 
                                    className={selectedItem === subItem ? 'selected' : ''}
                                    onClick={() => handleItemClick(item.id, subItem)}>
                                        <Link to="/about">About Us</Link>
                                    <a href="#">{subItem}</a>
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
