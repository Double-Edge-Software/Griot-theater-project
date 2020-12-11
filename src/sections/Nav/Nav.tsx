import React, { FunctionComponent } from 'react';

// possible server - api import here

// CSS Imports
import './header.css';

interface Props {
    title: string;
}

export const Nav = ( {title}:Props ) => {

    return <div>
        <div className="nav-container">
            <h2 className = "logo-text">{title}</h2>
            <ul className = "menu-items">
                <li>Home</li>
                <li>Features</li>
                <li>The Collective</li>
                <li>Mission</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
}