import React from 'react';
import hamptonsBackgroundImage from '../../images/hamptons.jpeg';
import './Hamptons.css';

function Hamptons() {
    return (
        <div>
            <div style = {{
                    backgroundImage: `url(${hamptonsBackgroundImage})`,
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
            <h1>Hamptons</h1>
            <div class="centerPage">
                <div class="hamptonsWrapper">
                    <div class="pros_hamptons">
                        <h2>Pros</h2>
                        <h4>
                            <ul>
                                <li>There are great beaches</li>
                                <li>There are lots of people</li>
                                <li>You can go shopping</li>
                                <li>The food is really good</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="cons_hamptons">
                        <h2>Cons</h2>
                        <h4>
                            <ul>
                                <li>It can be cloudy/rainy and cold</li>
                                <li>It's expensive</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="hotels_hamptons">
                        <h2>Hotels</h2>
                        <h4>
                            <ul>
                                <li>The surf lodge (montauk)</li>
                                <li>The Pridwin</li>
                                <li>You can rent a house or stay with family/friends</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="thingsToDo_hamptons">
                        <h2>Things to do</h2>
                        <h4>
                            <ul>
                                <li>Go to the beaches</li>
                                <li>You can go to Montauk/NYC</li>
                                <li>You can go on boats</li>
                            </ul>
                        </h4>
                    </div>
                    <div class="funFact_hamptons">
                        <h2>Fun Fact</h2>
                        <h4>
                            <ul>
                                <li>You can drive to New York City </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hamptons;