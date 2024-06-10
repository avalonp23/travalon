import React from 'react';
import amsterdamBackgroundImage from '../../images/amsterdam.jpeg';
import './Amsterdam.css';

function Amsterdam() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${amsterdamBackgroundImage})`,
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
            <h1>Amsterdam</h1>
            <div class="centerPage">
                <div class="amsterdamWrapper">
                    <div class="pros_amsterdam">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>You can go shopping</li>
                                <li>It's easy to get around</li>
                                <li>There are many bikes</li>
                                <li>The air quality is really good</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_amsterdam">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>There aren't many cars</li>
                                <li>Theres not a lot to do</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_amsterdam">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>Soho house</li>
                                <li>Volkshotel</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_amsterdam">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>You can take a walking tour</li>
                                <ul>
                                    <li>WW2 Walking tour</li>
                                </ul>
                                <li>Visit the Oude Kerk</li>
                                <li>You can take a boat tour</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_amsterdam">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>The Oude Kerk is 811 years old </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Amsterdam;