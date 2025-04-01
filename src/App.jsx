import React, { useEffect, useState } from 'react'
import SearchBar from '../components/Search/SearchBar';
import SearchMobile from '../components/Search/SearchMobile';
import SearchGrid from '../components/Search/SearchGrid';

const SearchPage = (props) => {

    const [size, setSize] = useState(window.innerWidth);
    const [params, setParams] = useState(null);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);

      return () => {
        window.removeEventListener("resize", updateSize);
      }
    }, []);

    function submitQuery(query) {
      setParams({...query})
    }

    function handleClick(e) {
      e.preventDefault();
      e.target.blur();
      props.requestMoreData();
    }

  return (
    <>
    <main id="main">
      {
        size >=720 ? (
          <SearchBar 
            submitQuery={submitQuery}
            placeholderText={ size >= 1200 ? "Filter by title, companies, expertise..." : "Filter by Title..."}
            labelText={ size >= 1200 ? "Full Time Only" : "Full Time"} />
        ) : (
          <SearchMobile submitQuery={submitQuery} />
        )
      }
        <SearchGrid 
          data={props.data}
          switchViewMode={props.switchViewMode}
          params={params} 
        />

      {/*  <div className="load-more-btn-container">
          <button className="btn btn-primary"
              onClick={handleClick}>Load More</button>
        </div>   
      */}
        <div className="attribution">
          Challenge by {" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='https://github.com/sheet848'>Sheetal Naik</a>
        </div>
    </main>
    </>
  )
}

export default SearchPage
