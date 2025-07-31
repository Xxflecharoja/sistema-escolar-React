import React from 'react'

import { Helmet } from 'react-helmet'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="component1-component1">
        <img
          alt="Rectangle193465"
          src="/rectangle193465-1vij-300w.png"
          className="component1-rectangle19"
        />
        <div className="component1-frame157">
          <span className="component1-text1 Textbasenormal-400">Materia</span>
        </div>
        <div className="component1-frame159">
          <span className="component1-text2 Textbasenormal-400">Regresar</span>
        </div>
        <div className="component1-frame158">
          <span className="component1-text3 Textbasenormal-400">
            Calificacion
          </span>
        </div>
      </div>
    </div>
  )
}

export default Component1
