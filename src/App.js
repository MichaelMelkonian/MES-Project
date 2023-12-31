import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import Sidebar from './Sidebar';
import './App.css'; // Assuming you have some global styles
import Banner from './Banner';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inbox from './Inbox'; // Import your Inbox component
import Dropdown from './Dropdown'; // Import your Inbox component
import SearchBar from './SearchBar';
import './fonts.css';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 


  return (
<div className="parent-container">
    <Router>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <ToggleButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar/>
        </div>
        <div className="main-content">
            <Banner/>
            <div className="route-content">


            <Routes>
                {/* other routes */}
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/Dropdown" element={<Dropdown />} />
                <Route path="/SearchBar" element={<SearchBar />} />
            </Routes>
            </div>
        </div>
    </Router>
</div>

  );
}

export default App;
