import React from 'react'

import { Helmet } from 'react-helmet'

import './menu5.css'

const Menu5 = (props) => {
  return (
    <div className="menu5-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu5-menu">
        <div className="menu5-menuitem-link">
          <span className="menu5-text Textbasenormal-400">Temario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu5
