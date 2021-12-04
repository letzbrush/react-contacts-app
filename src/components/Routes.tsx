import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ContactsPage from './ContactsPage'
import ContactDetailPage from './ContactDetailPage'

const Routes = () => (
  <BrowserRouter basename='/'>
    <Switch>
      <Route exact path="/">
        <ContactsPage/>
      </Route>
      <Route path="/contact/:id">
        <ContactDetailPage/>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes
