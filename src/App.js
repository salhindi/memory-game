import { useState } from 'react'
import './App.css'

import Card from './components/Card'

const cardImages = [
  {"src": '/fruit_images/strawberry.jpg'},
  {"src": '/fruit_images/watermelon.jpg'},
  {"src": '/fruit_images/banana.jpg'},
  {"src": '/fruit_images/peach.jpg'},
  {"src": '/fruit_images/orange.jpg'},
  {"src": '/fruit_images/kiwi.jpg'},
  {"src": '/fruit_images/apple.jpg'},
  {"src": '/fruit_images/grapes.jpg'}
]
function App() {
    const [cards, setCards] = useState([])

    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ... card, id: Math.random() }))

      setCards(shuffledCards)
    }

    const handleChoice = (card) => {
       choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

  return (
        <div className="App">
            <h1> Welcome to Memory game</h1> 
                 <div>
                      <button onClick={shuffleCards}>New Game</button>   
                      <div className="grid">
                        { cards.map(card => (
                          <Card key={card.id} card={card} handleChoice={handleChoice}/>
                        ))}
                        </div> 
                  </div>
        </div>
  );
}

export default App;
