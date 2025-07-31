import React from 'react'

import { Helmet } from 'react-helmet'

import './deskop1.css'

const Deskop1 = (props) => {
  return (
    <div className="deskop1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="deskop1-deskop1">
        <input type="text" placeholder="SIA" className="deskop1-input1" />
        <input
          type="text"
          placeholder="INSTITUTO TECNOLOGICO \nJOHN PASCAL"
          className="deskop1-input2"
        />
        <img
          alt="image71641"
          src="/image71641-resr-300h.png"
          className="deskop1-image7"
        />
      </div>
    </div>
  )
}

export default Deskop1
