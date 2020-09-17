import React, { Component } from 'react';
import Coin from './coin';
import { choice } from './helpers';

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currCoin : null, 
            total : 0,
            heads : 0,
            tails : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const coinFlip = Boolean(Math.round(Math.random()));
        console.log(coinFlip);
        this.setState(st => {
            return {
                currCoin : coinFlip,
                total : st.total + 1,
                heads : st.heads + (coinFlip === true ? 1 : 0),
                tails : st.tails + (coinFlip === false ? 1 : 0)
            };
        });
    }

    handleClick() {
        this.flipCoin();
    }

    render() {
        return(
            <div className="CoinFlipper">
                <h1>Let's flip a coin!</h1>
                {(this.state.currCoin != null) && <Coin face={this.state.currCoin} total={this.state.total} heads={this.state.heads} tails={this.state.tails}/>}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default CoinFlipper;