import React from "react";
import './ExploreCities.css';
import mustiqueImage from '../images/mustique.jpeg';
import edinburghImage from '../images/edinburgh.jpeg';
import florenceImage from '../images/florence.jpeg';
import caboImage from '../images/cabo.jpeg';
import hamptonsImage from '../images/hamptons.jpeg';
import NYCImage from '../images/nyc.jpeg';
import amsterdamImage from '../images/amsterdam.jpeg';
import courchevelImage from '../images/courchevel.jpeg';
import marrakeshImage from '../images/marrakech.jpeg';

function ExploreCities() {
    return (
        <div class="centerpage">
            <div class="wrapper">
                <div class="one">
                    <figure>
                        <a href="./mustique">
                            <img class="images" src={mustiqueImage} alt="Mustique" />
                            <p class="imgDescription">Mustique</p>
                        </a>  
                    </figure>
                </div>
                <div class="two">
                    <figure>
                        <a href="./edinburgh">
                            <img class="images" src={edinburghImage} alt="Edinburgh" />
                            <p class="imgDescription">Edinburgh</p>
                        </a>
                    </figure>
                </div>
                <div class="three">
                    <figure>
                        <a href="./florence">
                            <img class="images" src={florenceImage} alt="Florence" />
                            <p class="imgDescription">Florence</p>
                        </a>
                    </figure>
                </div>
                <div class="four">
                    <figure>
                        <a href="./cabo">
                            <img class="images" src={caboImage} alt="Cabo" />
                            <p class="imgDescription">Cabo</p>
                        </a>
                    </figure>
                </div>
                <div class="five">
                    <figure>
                        <a href="./hamptons">
                            <img class="images" src={hamptonsImage} alt="Hamptons" />
                            <p class="imgDescription">Hamptons</p>
                    </a>
                    </figure>
                </div>
                <div class="six">
                    <figure>
                        <a href="./NYC">
                            <img class="images" src={NYCImage} alt="NYC" />
                            <p class="imgDescription">NYC</p>
                        </a>
                    </figure>
                </div>
                <div class="seven">
                    <figure>
                        <a href="./amsterdam">
                            <img class="images" src={amsterdamImage} alt="Amsterdam" />
                            <p class="imgDescription">Amsterdam</p>
                        </a>
                    </figure>
                </div>
                <div class="eight">
                    <figure>
                        <a href="./courchevel">
                            <img class="images" src={courchevelImage} alt="Courchevel" />
                            <p class="imgDescription">Courchevel</p>
                        </a>
                    </figure>
                </div>
                <div class="nine">
                    <figure>
                        <a href="./marrakesh">
                            <img class="images" src={marrakeshImage} alt="Marrakesh" />
                            <p class="imgDescription">Marrakesh</p>
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default ExploreCities;