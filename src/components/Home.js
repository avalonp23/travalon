import React from 'react';
import florenceImage from'../images/florence.jpg';

const HomePage = () => {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${florenceImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                }}   
            >
                <div class='websiteName'>
                    <h1>TRAVALON</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;