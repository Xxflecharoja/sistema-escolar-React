import React from 'react'

import { Helmet } from 'react-helmet'

import './menu-exclusivojefedepartamento.css'

const MenuExclusivojefedepartamento = (props) => {
  return (
    <div className="menu-exclusivojefedepartamento-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="menu-exclusivojefedepartamento-menu-exclusivojefedepartamento">
        <div className="menu-exclusivojefedepartamento-menuitem-link1">
          <span className="menu-exclusivojefedepartamento-text1 Textbasenormal-400">
            Inicio
          </span>
        </div>
        <div className="menu-exclusivojefedepartamento-menuitem-link2">
          <span className="menu-exclusivojefedepartamento-text2 Textbasenormal-400">
            Alumnos
          </span>
        </div>
        <div className="menu-exclusivojefedepartamento-menuitem-link3">
          <span className="menu-exclusivojefedepartamento-text3 Textbasenormal-400">
            Calificaciones
          </span>
        </div>
        <div className="menu-exclusivojefedepartamento-menuitem-link4">
          <span className="menu-exclusivojefedepartamento-text4 Textbasenormal-400">
            Kardex
          </span>
        </div>
      </div>
    </div>
  )
}

export default MenuExclusivojefedepartamento
