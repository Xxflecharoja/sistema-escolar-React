import React from 'react'

import { Helmet } from 'react-helmet'

import './menuitem-link.css'

const MenuitemLink = (props) => {
  return (
    <div className="menuitem-link-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menuitem-link-menuitem-link">
        <span className="menuitem-link-text Textbasenormal-400">M25230688</span>
      </div>
    </div>
  )
}

export default MenuitemLink
