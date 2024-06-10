import React from 'react';
import courchevelBackgroundImage from '../../images/courchevel.jpeg';
import './Courchevel.css';

function Courchevel() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${courchevelBackgroundImage})`,
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
            <h1>Courchevel</h1>
            <div class="centerPage">
                <div class="courchevelWrapper">
                    <div class="pros_courchevel">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>There is great food</li>
                                <li>You can ski throughout 'les trois vallees'</li>
                                <li>There is good snow</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_courchevel">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>It's hard to get to</li>
                                <ul>
                                    <li>You have to fly to Geneva, then drive to Courchevel </li>
                                </ul>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_courchevel">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>L'Atelier</li>
                                <li>Courcheneige</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_courchevel">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>Go skiing or snowboarding</li>
                                <li>You can eat out</li>
                                <ul>
                                    <li>Mamma Mia</li>
                                    <li>Le petite Savoyard</li>
                                    <li>Sumo San</li>
                                </ul>
                                <li>You can hike</li>
                                <li>You can go into the town</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_courchevel">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>There are resturants and shops on the slopes</li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courchevel;