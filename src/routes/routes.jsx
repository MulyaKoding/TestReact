import React from 'react'

import { Route, Switch } from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={main}/>
        </Switch>
    )
}