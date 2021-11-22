import { FaTimes } from 'react-icons/fa'

const Card = ( {card, onDelete, onToggle} ) => {
  return (
    <div className='task' onDoubleClick={() => onToggle(card.id)} >
      <h3>{ card.name } 
      
      <input type="checkbox" value={card.id} />
      </h3>
      <p>{card.day}</p>
    </div>
  )
}

export default Card
