import React from 'react'

import { Helmet } from 'react-helmet'

import './menu11.css'

const Menu11 = (props) => {
  return (
    <div className="menu11-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu11-menu">
        <div className="menu11-menuitem-link">
          <span className="menu11-text Textbasenormal-400">Kardex</span>
        </div>
      </div>
    </div>
  )
}

export default Menu11
