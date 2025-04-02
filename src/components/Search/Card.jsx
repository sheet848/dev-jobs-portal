import React, { useState, useEffect } from 'react'

const Card = (props) => {

  function handleClick(e) {
    e.preventDefault();
    props.switchViewMode(props.data.id);
  }

  return (
    <>
    <div className="card">
      <div className="company-logo" 
           style={{ backgroundColor: props.data.logoBackground }} >
        <img 
          className="company-logo-img"
          src={`/${props.data.logo}`}
          alt={`${props.data.company} company logo`} />
      </div>
      <p>
      {props.data.postedAt}&nbsp;&nbsp;
        <span className="dot">&#8228;</span>&nbsp;&nbsp;
        {props.data.contract}
      </p>
      <button className="card-title"
          type='button'
          onClick={e => handleClick(e)}>
       {props.data.position}
      </button>
      <p>{props.data.company}</p>
      <h5 className="card-location">{props.data.location}</h5>
    </div>
    </>
  )
}

export default Card