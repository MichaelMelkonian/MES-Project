import React from 'react';
import { motion } from 'framer-motion';
import './ToggleButton.css'; // Assuming you have this CSS file

const ToggleButton = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const variants = {
        open: { rotate: 180 },
        closed: { rotate: 0 }
    };

    return (
        <motion.button
            className="toggle-button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(state => !state)}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={isSidebarOpen ? "open" : "closed"}
                variants={variants}
            >
                <polyline points="9 18 15 12 9 6"></polyline>
            </motion.svg>
        </motion.button>
    );
};

export default ToggleButton;
