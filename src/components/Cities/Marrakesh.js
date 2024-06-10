import React from 'react';
import marrakeshBackgroundImage from '../../images/marrakech.jpeg';
import './Marrakesh.css';

function Marrakesh() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${marrakeshBackgroundImage})`,
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
            <h1>Marrakesh</h1>
            <div class="centerPage">
                <div class="marrakeshWrapper">
                    <div class="pros_marrakesh">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>There is really good resturants</li>
                                <li>It's very pretty, especially the desert</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_marrakesh">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>It's can be pretty dangerous</li>
                                <li>There are many bugs and animals</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_marrakesh">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>Amanjena</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_marrakesh">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>You can go to Souksemmarine</li>
                                <li>You can go camel riding</li>
                                <li>You can go to the desert</li>
                                <li>You can go to spas</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_marrakesh">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>There are snakes to take photos with</li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marrakesh;