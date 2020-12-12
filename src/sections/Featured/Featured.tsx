import React, { FunctionComponent } from 'react';

// possible server - api import here

// CSS Imports
import './Featured.css';

interface Props {
    title: string;
}

export const Featured = ( {title}:Props ) => {

    return <div>

        <div className = 'featured-container'>
            <h1 id = "featured">Featured</h1>

            <div className = "card-container">
                <div id="card-wrap">
                    <div id="card-display">
                        <div className="card-item card-img">
                            <img src="https://res.cloudinary.com/drra3biar/image/upload/v1607726921/griot-theater-photos/Piano-Lesson-Image_rup6np.jpg" alt=""/>
                            <div>
                                <p>Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}