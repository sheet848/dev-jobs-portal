import React, { useState } from 'react'

import magnifierUrl from '../../assets/desktop/icon-search.svg'
import locationUrl from '../../assets/desktop/icon-location.svg'

const SearchBar = (props) => {

    const [query, setQuery] =  useState ( {
        job: "",
        location: "",
        fullTimeOnly: false
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setQuery((prevQuery) => {
            return {
                ...prevQuery,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        e.target.blur();
        props.submitQuery(query);
    }

  return (
    <>
    <div className="search-bar width-default">
        <div className="search-input-container search-job">
            <img src={magnifierUrl} alt="magnifier glass" className="img-search img-magnifier" />
            <input type="text"
                   className='input input-job'
                   placeholder={props.placeholderText}
                   name='job'
                   id='job'
                   value={query.job}
                   onChange={handleChange}
                     />
            <span></span>
        </div>
        <div className="search-input-conatiner search-location">
            <img src={locationUrl} alt="location search" className="img-search img-location" />
            <input type="text"
                   className='input input-location'
                   placeholder='Filter by location...'
                   name='location'
                   id='location'
                   value={query.location}
                   onChange={handleChange} />
            <span></span>
        </div>
        <div className="search-controls-container">
            <input type="text"
                   className='checkbox-deafult'
                   name='fullTimeOnly'
                   id='fullTimeOnly'
                   checked={query.fullTimeOnly}
                   onChange={handleChange}
                   tabIndex='-1' />
                <label for="fullTimeOnly" className="label-checkbox" tabIndex="0">
                    <span></span>
                    {props.labelText}
                </label>
                <button className="btn btn-primary btn-search"
                        onClick={e => handleSubmit(e)}>
                    Search
                </button>
        </div>
    </div>
    </>
  )
}

export default SearchBar
