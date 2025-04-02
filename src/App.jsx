import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'

function App() {

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [displayGrid, setdisplayGrid] = useState(true);
  const [detail, setDetail] = useState({});

  function switchViewMode(id) {
    if (id) {
      setdisplayGrid(prevDisplayGrid => !prevDisplayGrid);
      setDetail(data.find(entry => entry.id === id) || null);
    } else {
      setdisplayGrid(true);
    }
  }

  useEffect(() => {
    fetch('./constants/data.json', { mode: "no-cors"})
      .then(res => res.json())
      .then(jsonArray => {
        const filterArray = jsonArray.slice(0, limit);
        setData([...filterArray]);
      })
  }, [limit]);

  function requestMoreData() {
    setLimit(prevLimit => prevLimit + 6);
  }

  return (
    <>
      <Header switchViewMode={switchViewMode} />
      {
        displayGrid ? (
          <SearchPage
            data={data}
            requestMoreData={requestMoreData}
            switchViewMode={switchViewMode}
           />
        ) : (
          <DetailPage detail={detail} />
        )
      }
    </>
  )
}

export default App
