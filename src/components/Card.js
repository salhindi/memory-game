import './Card.css'

export default function Card( { card, handleChoice, flipped } ) {

    const handleCLick = () => {
        handleChoice(card)

    }
    return ( 
        <div className='card'>
            <div className={flipped ? "flipped" : ""} >
            
                <img className="front" src={card.src} alt="front of card" />
               <img className="back" src='/pattern.jpg' onClick={handleCLick} alt="back of card" />
            </div>
            

        </div>

            
    )
}