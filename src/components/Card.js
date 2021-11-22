const Card = ( {card, onDelete, onToggle, images} ) => {

  let displayImage = ''
  if (typeof images !== 'undefined') {
    displayImage = images.small
  }

  console.log(displayImage);

  return (
    <div className='task' onDoubleClick={() => onToggle(card.id)} >
      <h3>{ card.name } 
      {displayImage && <img src={displayImage} alt={card.name} />}
      <input type="checkbox" value={card.id} />
      </h3>
      <p>{card.day}</p>
    </div>
  )
}

export default Card
