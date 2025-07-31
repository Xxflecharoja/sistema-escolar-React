import React from 'react'

import { Helmet } from 'react-helmet'

import './menu7.css'

const Menu7 = (props) => {
  return (
    <div className="menu7-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu7-menu">
        <div className="menu7-menuitem-link">
          <span className="menu7-text Textbasenormal-400">Temario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu7
