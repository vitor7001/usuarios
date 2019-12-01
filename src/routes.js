import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import index from './pages/index/index'

import Details from './pages/details/details'

const routes = () => (
    <BrowserRouter>
        <Switch>

        <Route exact path="/" component={index} />
        <Route  path="/usuarios/:id" component={Details} />

        </Switch>
    </BrowserRouter>
)

export default routes