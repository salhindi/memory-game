import React, { Component } from "react";

import ReactCardFlip from 'react-card-flip';

import { useState } from "react";

import BackSide from '../components/cards/BackSide'
import FrontSide from '../components/cards/FrontSide'

const CardsContainer = ()  => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };
            return (
                 <div>
                    <h1> Welcome to Memory game</h1> 
        
                      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                              <div className="cards">
                                
                                    front
                                    
                                    <button onClick={handleClick}>Click to flip</button>
                                
                                </div>
    
                            <div className="cards">
                                
                                    back
                                     
              <button onClick={handleClick}>Click to flip</button>
            </ div>
          </ReactCardFlip>
          </div>   
        )
      }

      export default CardsContainer