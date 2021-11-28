import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {

  const [cards, setCards] = useState([])
  const [cardsSelected, setSelected] = useState([])

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards()
      setCards(cardsFromServer)
    }

    getCards()

    const getSelectedCards = async () => {
      const selectedCardsFromServer = await fetchSelectedCards()
      setSelected(selectedCardsFromServer)
    }

    getSelectedCards()

  }, [])

    // Add Card
    const addSelectedCard = async (card) => {
      console.log('add', card);

      const res = await fetch(`http://localhost:5000/cards`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(card)
        })

      //const data = await res.json();

      // setCards([...cards, data])

      setSelected([...cardsSelected, {'id' : card.id}])
    }

    // Fetch Selected Cards
    const fetchSelectedCards = async () => {
      const res = await fetch('http://localhost:5000/cards')
      const data = await res.json()
  
      return data
    }
  
    // Fetch Selected Card
    // const fetchSelectedCard = async (id) => {
    //   const res = await fetch(`http://localhost:5000/card/${id}`)
    //   const data = await res.json()
  
    //   return data
    // }

  // Fetch Cards
  const fetchCards = async (search) => {
    let query = 'c%3Ared+pow%3D3';
    console.log(search);

    if (typeof search !== 'undefined') {
      query = search.search
    }

    const res = await fetch(`https://api.scryfall.com/cards/search?order=cmc&q=${query}`)
    const data = await res.json()

    //console.log(data.data[0].image_uris.small)

    return data.data
  }
  
  // Delete task
  const deleteCard = async (id) => {
    await fetch(`http://localhost:5000/cards/${id}`, { method: 'DELETE' })

    setSelected(cardsSelected.filter( card => card.id !== id ))

    console.log('delete', id);
  }

  // on search
  const onSearch = async (search) => {
    const res = await fetchCards(search);
    setCards(res);
  }

  const onToggle = async (id, checked) => {

      console.log(cardsSelected);
      const collision = cardsSelected.filter( card => card.id === id )

      // if collision, filter out the ID other add the ID to the array
      collision && checked ? deleteCard(id) : addSelectedCard({'id' : id}); console.log(id);
  }

  const CardsWrapper = ({cards}) => {
    return (typeof cards !== 'undefined' && cards.length > 0) ? <Cards cards={cards} onToggle={onToggle}  selected={cardsSelected}  /> : 'No cards here, d00d'
  }

  return (
    <Router>
      <div className="container">
        <Header title='Card Selector' />
        <Search onSearch={onSearch} />
        <Routes>
          <Route exact 
            path="/" 
            element={<CardsWrapper cards={cards}>
          </CardsWrapper> } >
          </Route> 
        </Routes>  
        <Footer />
      </div>
    </Router>
  );
}

export default App;
