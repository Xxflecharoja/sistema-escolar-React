import React from 'react'

import { Helmet } from 'react-helmet'

import './impresion.css'

const Impresion = (props) => {
  return (
    <div className="impresion-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="impresion-impresion">
        <img
          alt="Rectangle132141"
          src="/rectangle132141-5yey-400h.png"
          className="impresion-rectangle13"
        />
        <div className="impresion-frame155">
          <span className="impresion-text10">
            IMPRIMIR DOCUMENTOS
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <span className="impresion-text11">
          <span>Horarios de salones</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>Lista de alumnos</span>
          <br></br>
          <br></br>
          <br></br>
          <span>Calendario academico</span>
        </span>
        <img
          alt="Rectangle142142"
          src="/rectangle142142-2ba4f.svg"
          className="impresion-rectangle14"
        />
        <span className="impresion-text22">IMPRIMIR SELECCIÓN</span>
        <img
          alt="Rectangle152142"
          src="/rectangle152142-3xoj-200w.png"
          className="impresion-rectangle15"
        />
        <img
          alt="Rectangle162142"
          src="/rectangle162142-aqlj-200w.png"
          className="impresion-rectangle16"
        />
        <img
          alt="Rectangle172142"
          src="/rectangle172142-uqff-200w.png"
          className="impresion-rectangle17"
        />
      </div>
    </div>
  )
}

export default Impresion
