import React from 'react'

import { Helmet } from 'react-helmet'

import './impresionexitosa.css'

const Impresionexitosa = (props) => {
  return (
    <div className="impresionexitosa-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="impresionexitosa-impresionexitosa">
        <img
          alt="Rectangle183235"
          src="/rectangle183235-rtjj-200h.png"
          className="impresionexitosa-rectangle18"
        />
        <span className="impresionexitosa-text">Impreso Con Exito</span>
      </div>
    </div>
  )
}

export default Impresionexitosa
