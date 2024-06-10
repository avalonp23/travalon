import React from 'react';
import NYCBackgroundImage from '../../images/nyc.jpeg';
import './NYC.css';

function NYC() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${NYCBackgroundImage})`,
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
            <h1>New York City</h1>
            <div class="centerPage">
                <div class="NYCWrapper">
                    <div class="pros_NYC">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>There is a lot to do</li>
                                <li>It's easy to get around and small</li>
                                <li>It's easy to travel to and from</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_NYC">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>It's expensive</li>
                                <li>It's dangerous</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_NYC">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>The Mark</li>
                                <li>The Pierre</li>
                                <li>The Plaza</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_NYC">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>You can go to times square</li>
                                <li>You can go to central park</li>
                                <li>You can see the statue of liberty</li>
                                <li>You can go shopping</li>
                                <li>You can drive to long island</li>
                                <li>You can visit or eat at many different resturants</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_NYC">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>Serafina has tennis racket pasta</li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NYC;