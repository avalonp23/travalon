import React from 'react';
import edinburghBackgroundImage from '../../images/edinburgh.jpeg';
import './Edinburgh.css';

function Edinburgh() {
    return (
        <div>
        <div style = {{
                backgroundImage: `url(${edinburghBackgroundImage})`,
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
        <h1>Edinburgh</h1>
        <div class="centerPage">
            <div class="edinburghWrapper">
                <div class="pros_edinburgh">
                    <h2>Pros</h2>
                    <h4>
                        <ul>
                            <li>It's very pretty</li>
                            <li>Your able to walk to a lot of places</li>
                            <li>It's a very historic city</li>
                            <li>You can go golfing</li>
                        </ul>
                    </h4>
                </div>
                <div class="cons_edinburgh">
                    <h2>Cons</h2>
                    <h4>
                        <ul>
                            <li>It's rainy and cold</li>
                        </ul>
                    </h4>
                </div>
                <div class="hotels_edinburgh">
                    <h2>Hotels</h2>
                    <h4>
                        <ul>
                            <li>The Balmoral</li>
                            <li>The Bonham</li>
                        </ul>
                    </h4>
                </div>
                <div class="thingsToDo_edinburgh">
                    <h2>Things to do</h2>
                    <h4>
                        <ul>
                            <li>Go on a walking tour</li>
                            <li>Play golf</li>
                            <li>Visit the castle</li>
                        </ul>
                    </h4>
                </div>
                <div class="funFact_edinburgh">
                    <h2>Fun Fact</h2>
                    <h4>
                        <ul>
                            <li>Edinburgh was the first city to have a fire service!</li>
                        </ul>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Edinburgh;