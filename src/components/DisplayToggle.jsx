import React, { useEffect, useState } from 'react'
import sunUrl from '../assets/desktop/icon-sun.svg'
import moonUrl from '../assets/desktop/icon-moon.svg'

const DisplayToggle = () => {

  const body = document.querySelector("body");
  const [displayMode, setDisplayMode] = useState(body.dataset.display);

  useEffect(() => {
    const defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches ?
    'dark'
    : 'light'
    body.dataset.display = sessionStorage.getItem('devjobs_display_mode') || defaultMode
  }, []);

  function handleClick(e) {
    e.preventDefault();
    e.target.blur();

    setDisplayMode((prevDisplayMode) => {
      const newDisplayMode = prevDisplayMode === 'dark' ? 'light' : 'dark';
      body.dataset.display = newDisplayMode;
      sessionStorage.setItem("devjobs_display_mode", newDisplayMode);
      return newDisplayMode;
    })
  }

  return (
    <>
    <div className="display-toggle">
      <img src={sunUrl} alt="light mode" />
      <button
          type='button'
          className='btn-display-switch'
          onClick={e => handleClick(e)} 
          aria-label = {
            displayMode === 'dark'
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          }
      />
      <img src={moonUrl} alt="dark mode" />
    </div>
    </>
  )
}

export default DisplayToggle