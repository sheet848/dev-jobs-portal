import React, { useState } from 'react'
import filterUrl from '../../assets/mobile/icon-filter.svg'
import magnifierUrl from '../../assets/desktop/icon-search.svg'
import locationUrl from '../../assets/desktop/icon-location.svg'

const SearchMobile = (props) => {

  const [query, setQuery] = useState({
    job: "",
    location: "",
    fullTimeOnly: false
  })

  const [modalActive, setModalActive] = useState(false);

  function toggleModal(e) {
    e.preventDefault();
    e.target.blur();
    setModalActive(prevModalActive => !prevModalActive);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setQuery((prevQuery) => {
      return {
        ...prevQuery,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleModal(e);
    props.submitQuery(query);
  }

  return (
    <>
    <div className="search-mobile width-default">
      <input type="text" className="input input-job input-job-mobile" 
              placeholder='Filter by mobile...'
              name='job'
              id='job'
              value={query.job}
      />
      <span></span>
      <img src={filterUrl} alt="filter icon" className="img-filter-icon" />
      <button
          type='button'
          className="btn btn-square"
          aria-label='Open search options'
          onClick={e => toggleModal(e)}
      >
        <img src={magnifierUrl} alt="magnifying glass" className='img-mobile-btn' />
      </button>
      <div className={modalActive ? "modal-wrapper" : "modal-wrapper hidden"}>
        <div className="modal">
          <div className="search-modal-container">
            <img src={locationUrl} alt="location symbol" className="img-search img-location" />
            <input type="text" className="input input-location" 
                placeholder='Filter by location...'
                name='location'
                id='location'
                value={query.location}
                onChange={handleChange}
                />
            <span></span>
          </div>
          <div className="search-controls-container">
            <input type="checkbox" className="checkbox-default"
                name='fullTimeOnly'
                id='fullTimeOnly'
                checked={query.fullTimeOnly}
                tabIndex="-1"
                onChange={handleChange}
            />
            <label for="fullTimeOnly" className="label-checkbox" tabIndex={0}>
              <span></span>
              Full Time Only
            </label>
            <button className="btn btn-primary btn-modal"
                  onClick={e => handleSubmit(e)}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchMobile