import { useState } from 'react'
import './App.css'

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

    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ... card, id: Math.random() }))

      setCards(shuffledCards)
    }

  return (
        <div className="App">
            <h1> Welcome to Memory game</h1> 
                 <div>
                      <button onClick={shuffleCards}>New Game</button>   
                      <div className="grid">
                        { cards.map(card => (
                          <div key={card.id} className='card'>
                              <div>
                                <img className="front" src={card.src} alt="front of card" />
                                <img className="back" src='/pattern.jpg' alt="back of card" />
                                </div>

                            </div>
                        ))}
                        </div> 
                  </div>
        </div>
  );
}

export default App;
