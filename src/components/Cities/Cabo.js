import React from 'react';
import caboBackgroundImage from '../../images/cabo.jpeg';
import './Cabo.css';

function Cabo() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${caboBackgroundImage})`,
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
            <h1>Cabo</h1>
            <div class="centerPage">
                <div class="caboWrapper">
                    <div class="pros_cabo">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>It has amazing weather</li>
                                <li>There are many beaches</li>
                                <li>It's easy to get around</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_cabo">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>It is very expensive</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_cabo">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>The Montage</li>
                                <li>Playa Grande resort</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_cabo">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>Go to resturants</li>
                                    <ul>
                                        <li>Flora Farms</li>
                                        <li>Acre</li>
                                    </ul>
                                <li>Go to the beach</li>
                                <li>Zipline on mountains</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_cabo">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>You can take a boat ride to see the whole city </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cabo;