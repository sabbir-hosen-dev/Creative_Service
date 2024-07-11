import React from 'react'
import Navber from '../../Seared/Navber/Navber'
import "./Heaser.css"
import Banner from '../Banner/Banner'

function Header() {
  return (
    <header>
      <div className="wrap">
        <Navber />
        <Banner />
      </div>
    </header>
  )
}

export default Header
