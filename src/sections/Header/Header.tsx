import React, { FunctionComponent } from 'react';

// possible server - api import here

// CSS Imports
import './header.css';

interface Props {
    title: string;
}

export const Header = ( {title}:Props ) => {

    return <div>
            <section className = "hero-image">
                <div>
                    <h2>By Dominique Morisou</h2>
                    <h1>Sunset Baby</h1>
                    <h4>Show Run Time</h4>
                    <button>Learn More</button>
                </div>
            </section>
    </div>
}