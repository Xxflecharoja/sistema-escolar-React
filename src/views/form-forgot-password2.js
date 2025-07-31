import React from 'react'

import { Helmet } from 'react-helmet'

import './form-forgot-password2.css'

const FormForgotPassword2 = (props) => {
  return (
    <div className="form-forgot-password2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="form-forgot-password2-form-forgot-password">
        <div className="form-forgot-password2-input-field">
          <span className="form-forgot-password2-text1 BodyBase">
            CONTRASEÑA NUEVA
          </span>
          <input
            type="text"
            placeholder="Value"
            className="form-forgot-password2-input"
          />
        </div>
        <button className="form-forgot-password2-button-group">
          <button className="form-forgot-password2-button1">
            <span className="form-forgot-password2-text2 SingleLineBodyBase">
              Cancelar
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </button>
          <button className="form-forgot-password2-button2"></button>
        </button>
      </div>
    </div>
  )
}

export default FormForgotPassword2
