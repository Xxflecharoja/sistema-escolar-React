import React from 'react'

import { Helmet } from 'react-helmet'

import './menu10.css'

const Menu10 = (props) => {
  return (
    <div className="menu10-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu10-menu">
        <div className="menu10-menuitem-link">
          <span className="menu10-text Textbasenormal-400">Temario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu10
