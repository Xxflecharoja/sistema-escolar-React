import React from 'react'

import { Helmet } from 'react-helmet'

import './menu3.css'

const Menu3 = (props) => {
  return (
    <div className="menu3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu3-menu">
        <div className="menu3-menuitem-link1">
          <span className="menu3-text1 Textbasenormal-400">INICIO</span>
        </div>
        <div className="menu3-menuitem-link2">
          <span className="menu3-text2 Textbasenormal-400">Alumnos</span>
        </div>
        <div className="menu3-menuitem-link3">
          <span className="menu3-text3 Textbasenormal-400">Docentes</span>
        </div>
      </div>
    </div>
  )
}

export default Menu3
