import Card from './Card'

const Cards = ( {cards, onDelete, onToggle } ) => {

  return (
    <>
      {cards.map((card) => (
          <Card key={card.id} card={card} 
          onDelete={onDelete} onToggle={onToggle} images={card.image_uris}
          />
          )
        )
      }
    </>
  )
}

export default Cards
