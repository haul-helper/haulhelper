import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Create from 'Pages/Create'
import Header from 'Components/Header/Header'
import {Container} from 'Styled/Container'

const Routes = () => (
  <Container>
    <Header />
    <Switch>
      <Route path="/create" component={Create} />
    </Switch>
  </Container>
)

export default Routes
