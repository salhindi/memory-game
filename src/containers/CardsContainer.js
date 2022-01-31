import React, { Component } from "react";

import ReactCardFlip from 'react-card-flip';

import BackSide from '../components/cards/BackSide'
import FrontSide from '../components/cards/FrontSide'

export default class CardsContainer extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    
      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
       <div>
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
    
           <div>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </ div>
          </ReactCardFlip>
        )
      }
    
    
}