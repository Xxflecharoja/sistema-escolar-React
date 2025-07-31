import React from 'react'

import { Helmet } from 'react-helmet'

import './form-forgot-password1.css'

const FormForgotPassword1 = (props) => {
  return (
    <div className="form-forgot-password1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="form-forgot-password1-form-forgot-password">
        <div className="form-forgot-password1-input-field">
          <span className="form-forgot-password1-text1 BodyBase">
            CONTRASEÑA NUEVA
          </span>
          <input
            type="text"
            placeholder="Value"
            className="form-forgot-password1-input"
          />
        </div>
        <button className="form-forgot-password1-button-group">
          <button className="form-forgot-password1-button1">
            <span className="form-forgot-password1-text2 SingleLineBodyBase">
              Cancelar
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </button>
          <button className="form-forgot-password1-button2"></button>
        </button>
      </div>
    </div>
  )
}

export default FormForgotPassword1
