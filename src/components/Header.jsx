import React from 'react'
import logoUrl from '../assets/desktop/logo.svg'
import DisplayToggle from './DisplayToggle'

const Header = (props) => {

    function handleClick(e) {
        e.preventDefault()
        document.querySelector(".logo").blur()
        document.querySelector(".btn-return-home").blur()
        console.log(e.target)
        props.switchViewMode(null)
    }

  return (
    <>
    <header className="header">
        <div className="title-display-container width-default">
            <button className="btn-return-home"
                    type='button'
                    aria-label='Return to Home'
                    onClick={ e => handleClick(e)}
            >
                <img src={logoUrl} alt="Devjobs logo" />
            </button>
            <DisplayToggle />
        </div>
    </header>
    </>
  )
}

export default Header