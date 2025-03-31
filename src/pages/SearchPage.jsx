import React, { useState } from 'react'
import SearchBar from '../components/Search/SearchBar';
import SearchMobile from '../components/Search/SearchMobile';
import SearchGrid from '../components/Search/SearchGrid';

const SearchPage = () => {

    //const [size, setSize] = useState(window.innerWidth);

  return (
    <>
    <main id="main">
        <SearchBar />
        <SearchMobile />

        <SearchGrid />
    </main>
    </>
  )
}

export default SearchPage
