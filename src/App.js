import CardsContainer from './containers/CardsContainer'

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
  //duplicate each card once
  //randomize order using sort
  //assign random for id

  const shuffleCards = () => {
    const shuffledcards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ... card, id: Math.random() }))
  }


  return (
    <div>
                    <h1> Welcome to Memory game</h1> 

      
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />
        <CardsContainer />


 
    </div>
  );
}

export default App;
