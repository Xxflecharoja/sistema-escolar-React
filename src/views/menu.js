import React from 'react'

import { Helmet } from 'react-helmet'

import './menu.css'

const Menu = (props) => {
  return (
    <div className="menu-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu-menu">
        <div className="menu-menuitem-link1">
          <span className="menu-text1 Textbasenormal-400">Cerrar sesión</span>
        </div>
        <div className="menu-menuitem-link2">
          <span className="menu-text2 Textbasenormal-400">
            Cambiar contraseña
          </span>
        </div>
      </div>
    </div>
  )
}

export default Menu
