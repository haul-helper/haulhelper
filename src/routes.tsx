import React, {Suspense} from 'react'
import {mount, route, lazy, redirect} from 'navi'
import {Router, View} from 'react-navi'
/* */
import Home from 'h2/pages/Home'
import Header from 'h2/components/Header/Header'
import {Container} from 'h2/styled/Container'

const routes = mount({
  '/': route({
    title: 'h2 Valet',
    view: <Home />,
  }),
  '/:id': redirect(req => `/a/${req.params.id}`),
  '/a': lazy(() => import('h2/pages/View')),
})

const Routes = () => (
  <Router routes={routes}>
    <Container>
      <Header />
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Container>
  </Router>
)

export default Routes
