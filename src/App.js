import { useEffect, useState } from 'react'
import './App.css'

import Card from './components/Card'

const cardImages = [
  {"src": '/fruit_images/strawberry.jpg', matched: false},
  {"src": '/fruit_images/watermelon.jpg', matched: false},
  {"src": '/fruit_images/banana.jpg', matched: false},
  {"src": '/fruit_images/peach.jpg', matched: false},
  {"src": '/fruit_images/orange.jpg', matched: false},
  {"src": '/fruit_images/kiwi.jpg', matched: false},
  {"src": '/fruit_images/apple.jpg', matched: false},
  {"src": '/fruit_images/grapes.jpg', matched: false}
]
function App() {
    const [cards, setCards] = useState([])

    const [turn, setTurns] = useState(0)

    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ... card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
    }

    const handleChoice = (card) => {
       choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
      if (choiceOne && choiceTwo) {
        if (choiceOne.src === choiceTwosrc) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src = choiceOne.src) {
            return {...card, matched: true} 
            } else {
              return card
            }
          })
        })
        resetTurn()
      }
      else {
        setTimeout(() = resetTurn())
      }
        
      }

    }, [choiceOne, choiceTwo])

    const resetTurn = () =>
    {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurns => prevTurns + 1)
    }

  return (
        <div className="App">
            <h1> Welcome to Memory game</h1> 
                 <div>
                      <button onClick={shuffleCards}>New Game</button>   
                      <div className="grid">
                        { cards.map(card => (
                          <Card key={card.id} card={card} handleChoice={handleChoice}
                          flipped={card === choiceOne || card === choiceTwo || card.matched}/>
                        ))}
                        </div> 
                  </div>
        </div>
  );
}

export default App;
