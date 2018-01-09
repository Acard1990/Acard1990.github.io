import React from 'react';
import './App.css';

const Game = props => (
    <div className="game">
        <div className="flexGrid">{props.children}</div>
    </div>
);

export default Game;

//<div role="img" aria-label="click item" class="click-item shake" style="background-image: url(&quot;/assets/images/meeseeks.png&quot;);"></div>
