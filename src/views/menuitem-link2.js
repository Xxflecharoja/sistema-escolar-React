import React from 'react'

import { Helmet } from 'react-helmet'

import './menuitem-link2.css'

const MenuitemLink2 = (props) => {
  return (
    <div className="menuitem-link2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menuitem-link2-menuitem-link">
        <span className="menuitem-link2-text Textbasenormal-400">Horarios</span>
      </div>
    </div>
  )
}

export default MenuitemLink2
