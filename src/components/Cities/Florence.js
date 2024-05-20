import React from 'react';
import florenceBackgroundImage from '../../images/florence.jpeg';
import './Florence.css';

function Florence() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${florenceBackgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    marginTop: '-85px',
                    opacity: '0.75',
                    zIndex: '-1',
                }}   
            ></div>
            <h1>Florence</h1>
            <div class="centerPage">
                <div class="florenceWrapper">
                    <div class="pros_florence">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>It's very pretty</li>
                                <li>There is amazing food</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_florence">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>There's lots of hills</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_florence">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>Hotel Orto de Medici</li>
                                <li>Grand Hotel Baglioni Firenze</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_florence">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>Eat out at a resturant</li>
                                <li>Piazza del Duomo</li>
                                <li>Piazzalle Michaelangelo</li>
                                <li>Ponte Vecchio</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_florence">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>The Ponte Vecchio is 679 years old! </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Florence;