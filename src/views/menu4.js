import React from 'react'

import { Helmet } from 'react-helmet'

import './menu4.css'

const Menu4 = (props) => {
  return (
    <div className="menu4-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu4-menu">
        <div className="menu4-menuitem-link">
          <span className="menu4-text Textbasenormal-400">Temario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu4
