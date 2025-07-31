import React from 'react'

import { Helmet } from 'react-helmet'

import './menu8.css'

const Menu8 = (props) => {
  return (
    <div className="menu8-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu8-menu">
        <div className="menu8-menuitem-link1">
          <span className="menu8-text1 Textbasenormal-400">INICIO</span>
        </div>
        <div className="menu8-menuitem-link2">
          <span className="menu8-text2 Textbasenormal-400">Kardex</span>
        </div>
        <div className="menu8-menuitem-link3">
          <span className="menu8-text3 Textbasenormal-400">Horario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu8
