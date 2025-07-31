import React from 'react'

import { Helmet } from 'react-helmet'

import './menu1.css'

const Menu1 = (props) => {
  return (
    <div className="menu1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu1-menu">
        <div className="menu1-menuitem-link1">
          <span className="menu1-text1 Textbasenormal-400">INICIO</span>
        </div>
        <div className="menu1-menuitem-link2">
          <span className="menu1-text2 Textbasenormal-400">Docentes</span>
        </div>
        <div className="menu1-menuitem-link3">
          <span className="menu1-text3 Textbasenormal-400">Horario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu1
