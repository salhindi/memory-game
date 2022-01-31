import React, { Component } from "react";

import ReactCardFlip from 'react-card-flip';

import { useState } from "react";

import BackSide from '../components/cards/BackSide'
import FrontSide from '../components/cards/FrontSide'

const CardsContainer = ()  => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cards, setCards] = useState([
        {id: 1, img: '/strawberry.jpg', stat: ""},
        {id: 1, img: '/strawberry.jpg', stat: ""},
        {id: 2, img: '/watermelon.jpg', stat: ""},
        {id: 2, img: '/watermelon.jpg', stat: ""},
        {id: 3, img: '/banana.jpg', stat: ""},
        {id: 3, img: '/banana.jpg', stat: ""},
        {id: 4, img: '/peach.jpg', stat: ""},
        {id: 4, img: '/peach.jpg', stat: ""},
        {id: 5, img: '/orange.jpg', stat: ""},
        {id: 5, img: '/orange.jpg', stat: ""},
        {id: 6, img: '/kiwi.jpg', stat: ""},
        {id: 6, img: '/kiwi.jpg', stat: ""},
        {id: 7, img: '/apple.jpg', stat: ""},
        {id: 7, img: '/apple.jpg', stat: ""},
        {id: 8, img: '/grapes.jpg', stat: ""},
        {id: 8, img: '/grapes.jpg', stat: ""}
    ])
   
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };
            return (
                 <div>
        
                      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                              <div className="cards">
                                { cards.map(card => {

                                })}
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