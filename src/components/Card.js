// import PropTypes from 'prop-types'

const Card = ( {card, onDelete, onToggle, images, selected} ) => {

  let displayImage = ''
  if (typeof images !== 'undefined') {
    displayImage = images.small
  }

  // console.log(selected);

  const checked = (selected.filter( selectedCard => selectedCard.id === card.id )).length > 0;

  console.log('checked: ', checked);

  return (
    <div className='task' >
      <h3>{ card.name }</h3>
      {displayImage && <img src={displayImage} alt={card.name} />}
      <input type="checkbox" value={card.id} 
      checked={checked}
      onChange={() => onToggle(card.id, checked)}
      />

      <p>{card.day}</p>
    </div>
  )
}

export default Card
