import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'

function App() {

  //const [data, setData] = useState([])
  //const [limit, setLimit] = useState(12)
  const [displayGrid, setdisplayGrid] = useState(true);
  //const [detail, setDetail] = useState({})

  function switchViewMode(id) {
    if (id) {
      setdisplayGrid(prevDisplayGrid => !prevDisplayGrid);
      //setDetail(data.find(entry => entry.id === id) || null)
    } else {
      setdisplayGrid(true);
    }
  }

  return (
    <>
      <Header switchViewMode={switchViewMode} />
      {
        displayGrid ? (
          <SearchPage />
        ) : (
          <DetailPage />
        )
      }
    </>
  )
}

export default App
