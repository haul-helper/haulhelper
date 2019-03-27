import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Create from 'Pages/Create'
import PrivateRoute from 'Components/PrivateRoute'
import Header from 'Components/Header/Header'
import {Container} from 'Styled/Container'

const Routes = () => (
  <Container>
    <Header />
    <Switch>
      <Route path="/create" component={Create} />
      <PrivateRoute path="/profile" roles={['User']} component={Create} />
    </Switch>
  </Container>
)

export default Routes
