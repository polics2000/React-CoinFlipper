import React, { Component } from 'react';
import heads from './heads.jpg';
import tails from './tails.jpg';
import './img.css';

class Coin extends Component {
    render() {
        return(
            <div>
                {this.props.face ? <img src={heads} alt="heads"/> : <img src={tails}/>}
                <p>Out of {this.props.total}, there have been {this.props.heads} heads and {this.props.tails} tails.</p>
            </div>
        )
    }
}

export default Coin;