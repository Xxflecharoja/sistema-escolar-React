import React from 'react'

import { Helmet } from 'react-helmet'

import './menu6.css'

const Menu6 = (props) => {
  return (
    <div className="menu6-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu6-menu">
        <div className="menu6-menuitem-link">
          <span className="menu6-text Textbasenormal-400">Temario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu6
