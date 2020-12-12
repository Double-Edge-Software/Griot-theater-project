import React, { FunctionComponent } from 'react';

// possible server - api import here

// CSS Imports
import './welcome.css';

interface Props {
    title: string;
}

export const Welcome = ( {title}:Props ) => {

    return <div>
        <div className="welcome-container">
            <h1 id = "welcome">Welcome To The Griot Theater Collective </h1>
            <p id = "griot-text">
            Creating Opportunities to produce cross cultural theatrical works
            as well as new work by local BIPIC artists.
            While providing an educational training ground and nurturing
            space for youth by exposing them to the theatrical experience.
            </p>
        </div>
    </div>
}