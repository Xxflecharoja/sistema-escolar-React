import React from 'react'

import { Helmet } from 'react-helmet'

import './menu9.css'

const Menu9 = (props) => {
  return (
    <div className="menu9-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu9-menu">
        <div className="menu9-menuitem-link">
          <span className="menu9-text Textbasenormal-400">Temario</span>
        </div>
      </div>
    </div>
  )
}

export default Menu9
