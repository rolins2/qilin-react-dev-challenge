import { Button } from 'bootstrap'
import React, { useContext } from 'react'
import {ThemeContext} from './ThemeSwitcher'

function ThemeButton() {
    const {themeMode ,handleOnClick} = useContext(ThemeContext)
  return (
    <div>
        <h5> theme of the website is {themeMode}</h5>
        <button className={`btn ${themeMode === 'dark' ?  'btn-primary': 'btn-dark'} border`} onClick={handleOnClick}> {themeMode === "dark" ? "light" : "dark"}    </button>
    </div>
  )
}

export default ThemeButton