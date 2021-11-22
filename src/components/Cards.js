import Card from './Card'

const Cards = ( {cards, onDelete, onToggle, selected } ) => {

  return (
    <>
      {cards.map((card) => (
          <Card key={card.id} card={card} 
          onDelete={onDelete} onToggle={onToggle} images={card.image_uris} selected={selected}
          />
          )
        )
      }
    </>
  )
}

export default Cards
