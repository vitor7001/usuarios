import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import index from './pages/index/index'


const routes = () => (
    <BrowserRouter>
        <Switch>

            <Route exact path="/" component={index} />

        </Switch>
    </BrowserRouter>
)

export default routes