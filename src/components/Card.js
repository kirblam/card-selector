import PropTypes from 'prop-types'

const Card = ( {card, onDelete, onToggle, images, selected} ) => {

  let displayImage = ''
  if (typeof images !== 'undefined') {
    displayImage = images.small
  }

  // console.log(selected);

  const checked = (selected.includes(card.id))

  return (
    <div className='task' >
      <h3>{ card.name }</h3>
      {displayImage && <img src={displayImage} alt={card.name} />}
      <input type="checkbox" value={card.id} 
      checked={checked}
      onChange={() => onToggle(card.id)}
      />

      <p>{card.day}</p>
    </div>
  )
}

Card.defaultProps = {
  selected: false
}

Card.propTypes = {
  selected: PropTypes.bool.isRequired, 
}

export default Card
