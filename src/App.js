// import CardsContainer from './containers/CardsContainer'
import { useState } from 'react'

const cardImages = [
  {"src": '/img/strawberry.jpg'},
  {"src": '/img/watermelon.jpg'},
  {"src": '/img/banana.jpg'},
  {"src": '/img/peach.jpg'},
  {"src": '/img/orange.jpg'},
  {"src": '/img/kiwi.jpg'},
  {"src": '/img/apple.jpg'},
  {"src": '/img/grapes.jpg'}
]
function App() {
  const [cards, setCards] = useState([])

  
  //duplicate each card once
  //randomize order using sort
  //assign random for id

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ... card, id: Math.random() }))
    setCards(shuffledCards)
  }

  console.log(cards)


  return (
    <div>
                    <h1> Welcome to Memory game</h1> 

  <button onClick={shuffleCards}>New Game</button>    
        {/* <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer /> */}


 
    </div>
  );
}

export default App;
