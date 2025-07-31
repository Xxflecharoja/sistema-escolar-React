import React from 'react'

import { Helmet } from 'react-helmet'

import './menu2.css'

const Menu2 = (props) => {
  return (
    <div className="menu2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu2-menu">
        <div className="menu2-menuitem-link1">
          <span className="menu2-text1 Textbasenormal-400">Cerrar sesión</span>
        </div>
        <div className="menu2-menuitem-link2">
          <span className="menu2-text2 Textbasenormal-400">
            Cambiar contraseña
          </span>
        </div>
      </div>
    </div>
  )
}

export default Menu2
