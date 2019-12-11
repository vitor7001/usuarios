import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import index from './pages/index/index'
import Details from './pages/details/details'
import Insert from './pages/insert/insert'
import Update from './pages/update/update'
import Delete from './pages/delete/delete'

const routes = () => (
    <BrowserRouter>
        <Switch>

        <Route exact path="/" component={index} />
        <Route  path="/usuarios/:id" component={Details} />
        <Route  path="/CriarUsuarios" component={Insert} />
        <Route  path="/EditarUsuario/:id" component={Update} />
        <Route path="/DeletarUsuario/:id" component={Delete} />
        </Switch>
    </BrowserRouter>
)

export default routes