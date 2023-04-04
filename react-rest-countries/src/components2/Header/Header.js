import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to Rest Countries</h1>
            <nav className='menu bg-success-subtle'>
                <a href="#">Home</a>
                <a href="#">Countries</a>
                <a href="#">About</a>
            </nav>
        </div>
    );
};

export default Header;