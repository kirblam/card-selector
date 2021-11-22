import PropTypes from 'prop-types'

const Card = ( {card, onDelete, onToggle, images, selected} ) => {

  let displayImage = ''
  if (typeof images !== 'undefined') {
    displayImage = images.small
  }

  //console.log(displayImage);

  return (
    <div className='task' >
      <h3>{ card.name } 
      {displayImage && <img src={displayImage} alt={card.name} />}
      <input type="checkbox" value={card.id} 
      checked={selected}
      onChange={() => onToggle(card.id)}
      />
      </h3>
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
