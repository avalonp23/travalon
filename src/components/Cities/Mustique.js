import React from 'react';
import mustiqueBackgroundImage from '../../images/mustiquepalmtree.png';
import './Mustique.css';

function Mustique() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${mustiqueBackgroundImage})`,
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '22%',
                    right: '30px',
                    top: '175px',
                    position: 'absolute',
                    height: '82%',
                    width: '100%',
                    opacity: '0.55',
                    zIndex: '-1',
                }}   
            ></div>
            <h1>Mustique</h1>
            <div class="centerPage">
                <div class="mustiqueWrapper">
                    <div class="pros_mustique">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>It has good food</li>
                                <li>It has a good enviornment and people</li>
                                <li>The views are really pretty</li>
                                <li>There are lots of activities</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_mustique">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>It is hard to get to the island, you have to fly to Barbados or Saint Lucia then take a small plane</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_mustique">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>The Cotton House hotel, it's the only hotel on the island</li>
                                <li>You can rent villas/houses</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_mustique">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>Go to Basil's Bar</li>
                                <li>Boat rides</li>
                                <li>Scuba diving and snorkeling</li>
                                <li>Play tennis</li>
                                <li>Horseback riding</li>
                                <li>Swim with turtles</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_mustique">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>There are many tortoises that walk around the island!</li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mustique;