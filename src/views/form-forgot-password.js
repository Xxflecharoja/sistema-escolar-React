import React from 'react'

import { Helmet } from 'react-helmet'

import './form-forgot-password.css'

const FormForgotPassword = (props) => {
  return (
    <div className="form-forgot-password-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="form-forgot-password-form-forgot-password">
        <div className="form-forgot-password-input-field">
          <span className="form-forgot-password-text1 BodyBase">
            CONTRASEÑA NUEVA
          </span>
          <input
            type="text"
            placeholder="Value"
            className="form-forgot-password-input"
          />
        </div>
        <button className="form-forgot-password-button-group">
          <button className="form-forgot-password-button1">
            <span className="form-forgot-password-text2 SingleLineBodyBase">
              Cancelar
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </button>
          <button className="form-forgot-password-button2"></button>
        </button>
      </div>
    </div>
  )
}

export default FormForgotPassword
