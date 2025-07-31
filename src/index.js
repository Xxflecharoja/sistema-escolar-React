import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Frame3DAvatars20 from './views/frame3d-avatars20'
import Desktop21 from './views/desktop21'
import Desktop26 from './views/desktop26'
import Menu from './views/menu'
import FormForgotPassword from './views/form-forgot-password'
import Impresion from './views/impresion'
import Desktop31 from './views/desktop31'
import Frame1 from './views/frame1'
import Desktop28 from './views/desktop28'
import FormForgotPassword1 from './views/form-forgot-password1'
import Image8 from './views/image8'
import Menu1 from './views/menu1'
import Desktop24 from './views/desktop24'
import Desktop23 from './views/desktop23'
import Jefedepartamento from './views/jefedepartamento'
import Menu2 from './views/menu2'
import Menu3 from './views/menu3'
import Image10 from './views/image10'
import Frame3DAvatars26 from './views/frame3d-avatars26'
import Impresion12 from './views/impresion12'
import Desktop34 from './views/desktop34'
import MenuitemLink from './views/menuitem-link'
import Desktop27 from './views/desktop27'
import Desktop11 from './views/desktop11'
import Component1 from './views/component1'
import Deskop1 from './views/deskop1'
import Menu4 from './views/menu4'
import Image11 from './views/image11'
import Menu5 from './views/menu5'
import Desktop13 from './views/desktop13'
import MenuitemLink1 from './views/menuitem-link1'
import Impresion13 from './views/impresion13'
import Desktop20 from './views/desktop20'
import Image6 from './views/image6'
import Desktop10 from './views/desktop10'
import FormForgotPassword2 from './views/form-forgot-password2'
import MenuitemLink2 from './views/menuitem-link2'
import MenuExclusivojefedepartamento from './views/menu-exclusivojefedepartamento'
import Menu6 from './views/menu6'
import CardGridPricing from './views/card-grid-pricing'
import Impresion11 from './views/impresion11'
import Image9 from './views/image9'
import Menu7 from './views/menu7'
import Impresionexitosa from './views/impresionexitosa'
import Desktop14 from './views/desktop14'
import Desktop22 from './views/desktop22'
import Desktop12 from './views/desktop12'
import Desktop36 from './views/desktop36'
import Menu8 from './views/menu8'
import Desktop37 from './views/desktop37'
import Desktop32 from './views/desktop32'
import Menu9 from './views/menu9'
import JefedepartamentoAlumnos from './views/jefedepartamento-alumnos'
import Menu10 from './views/menu10'
import Desktop25 from './views/desktop25'
import Cambiarcontrasea from './views/cambiarcontrasea'
import Menu11 from './views/menu11'
import Desktop33 from './views/desktop33'
import Desktop29 from './views/desktop29'
import MenuitemLink3 from './views/menuitem-link3'
import Desktop35 from './views/desktop35'
import JefedepartamentoKardex from './views/jefedepartamento-kardex'
import Desktop30 from './views/desktop30'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Frame3DAvatars20} exact path="/frame3d-avatars20" />
        <Route component={Desktop21} exact path="/desktop21" />
        <Route component={Desktop26} exact path="/desktop26" />
        <Route component={Menu} exact path="/menu" />
        <Route
          component={FormForgotPassword}
          exact
          path="/form-forgot-password"
        />
        <Route component={Impresion} exact path="/impresion" />
        <Route component={Desktop31} exact path="/desktop31" />
        <Route component={Frame1} exact path="/frame1" />
        <Route component={Desktop28} exact path="/desktop28" />
        <Route
          component={FormForgotPassword1}
          exact
          path="/form-forgot-password1"
        />
        <Route component={Image8} exact path="/image8" />
        <Route component={Menu1} exact path="/menu1" />
        <Route component={Desktop24} exact path="/desktop24" />
        <Route component={Desktop23} exact path="/desktop23" />
        <Route component={Jefedepartamento} exact path="/jefedepartamento" />
        <Route component={Menu2} exact path="/menu2" />
        <Route component={Menu3} exact path="/menu3" />
        <Route component={Image10} exact path="/image10" />
        <Route component={Frame3DAvatars26} exact path="/frame3d-avatars26" />
        <Route component={Impresion12} exact path="/impresion12" />
        <Route component={Desktop34} exact path="/desktop34" />
        <Route component={MenuitemLink} exact path="/menuitem-link" />
        <Route component={Desktop27} exact path="/desktop27" />
        <Route component={Desktop11} exact path="/desktop11" />
        <Route component={Component1} exact path="/component1" />
        <Route component={Deskop1} exact path="/deskop1" />
        <Route component={Menu4} exact path="/menu4" />
        <Route component={Image11} exact path="/image11" />
        <Route component={Menu5} exact path="/menu5" />
        <Route component={Desktop13} exact path="/desktop13" />
        <Route component={MenuitemLink1} exact path="/menuitem-link1" />
        <Route component={Impresion13} exact path="/impresion13" />
        <Route component={Desktop20} exact path="/desktop20" />
        <Route component={Image6} exact path="/image6" />
        <Route component={Desktop10} exact path="/" />
        <Route
          component={FormForgotPassword2}
          exact
          path="/form-forgot-password2"
        />
        <Route component={MenuitemLink2} exact path="/menuitem-link2" />
        <Route
          component={MenuExclusivojefedepartamento}
          exact
          path="/menu-exclusivojefedepartamento"
        />
        <Route component={Menu6} exact path="/menu6" />
        <Route component={CardGridPricing} exact path="/card-grid-pricing" />
        <Route component={Impresion11} exact path="/impresion11" />
        <Route component={Image9} exact path="/image9" />
        <Route component={Menu7} exact path="/menu7" />
        <Route component={Impresionexitosa} exact path="/impresionexitosa" />
        <Route component={Desktop14} exact path="/desktop14" />
        <Route component={Desktop22} exact path="/desktop22" />
        <Route component={Desktop12} exact path="/desktop12" />
        <Route component={Desktop36} exact path="/desktop36" />
        <Route component={Menu8} exact path="/menu8" />
        <Route component={Desktop37} exact path="/desktop37" />
        <Route component={Desktop32} exact path="/desktop32" />
        <Route component={Menu9} exact path="/menu9" />
        <Route
          component={JefedepartamentoAlumnos}
          exact
          path="/jefedepartamento-alumnos"
        />
        <Route component={Menu10} exact path="/menu10" />
        <Route component={Desktop25} exact path="/desktop25" />
        <Route component={Cambiarcontrasea} exact path="/cambiarcontrasea" />
        <Route component={Menu11} exact path="/menu11" />
        <Route component={Desktop33} exact path="/desktop33" />
        <Route component={Desktop29} exact path="/desktop29" />
        <Route component={MenuitemLink3} exact path="/menuitem-link3" />
        <Route component={Desktop35} exact path="/desktop35" />
        <Route
          component={JefedepartamentoKardex}
          exact
          path="/jefedepartamento-kardex"
        />
        <Route component={Desktop30} exact path="/desktop30" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
