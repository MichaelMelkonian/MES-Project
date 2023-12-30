import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import Sidebar from './Sidebar';
import './App.css'; // Assuming you have some global styles
import Banner from './Banner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const listItems = [
    {
        content: 'Item 1',
        children: [
            {
                content: 'Sub-item 1.1',
                children: [
                    { content: 'Sub-sub-item 1.1.1' },
                    { content: 'Sub-sub-item 1.1.2' }
                ]
            },
            { content: 'Sub-item 1.2' }
        ]
    },
    { content: 'Item 2' },
    {
        content: 'Item 3',
        children: [
            { content: 'Sub-item 3.1' },
            { content: 'Sub-item 3.2' }
        ]
    }
];
  


  return (
    <div className="parent-container">
    <Banner/>
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <ToggleButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        <Sidebar items={listItems}/>
    </div>
</div>
  );
}

export default App;
