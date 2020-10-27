import React from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Homepage from './pages/Homepage/'
import Register from './pages/Register'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/register' component={Register}/>
            </Switch>
        </BrowserRouter>
    )
};