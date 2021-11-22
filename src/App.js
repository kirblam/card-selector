import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Search from './components/Search';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards()
      setCards(cardsFromServer)
    }

    getCards()
  }, [])

  // Fetch Cards
  const fetchCards = async (search) => {
    let query = 'c%3Ared+pow%3D3';
    console.log(search);

    if (typeof search !== 'undefined') {
      query = search.search
    }

    const res = await fetch(`https://api.scryfall.com/cards/search?q=${query}`)
    const data = await res.json()

    console.log(data.data[0].name)

    return data.data
  }

  // on search
  const onSearch = async (search) => {
    const res = await fetchCards(search);
    setCards(res);
  }

  // // toggle reminder
  // const toggleReminder = async (id) => {

  //   const taskToToggle = await fetchTask(id);
  //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`,
  //     {
  //       method: 'PUT',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(updTask)
  //     })

  //   const data = await res.json();

  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? {
  //         ...task, reminder:
  //           data.reminder
  //       } : task
  //     )
  //   )
  //   //console.log(id);
  // }

  return (
    <Router>
      <div className="container">
        <Header title='Card Selector' />
        <Search onSearch={onSearch} />
        {cards.length > 0 ?
          <Cards cards={cards} /> :
          'No cards here, d00d'}
        <Routes/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
