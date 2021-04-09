import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Home from './Home';
import Model_s from './Modes_s'
import Model_3 from './Model_3';
import Model_x from './Model_x';
import Model_y from './Model_y';
import Roof from './Roof';
import Nav from './Nav';
import Panel from './Panel';
import Shop from './Shop';
import Tes_acc from './tes_acc';

function App()
{
    return(
        <>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/modelS' component={withRouter(Model_s)}/>
            <Route exact path='/model3' component={withRouter(Model_3)}/>
            <Route exact path='/modelX' component={withRouter(Model_x)}/>
            <Route exact path='/modelY' component={withRouter(Model_y)}/>
            <Route exact path='/roof' component={withRouter(Roof)}/>
            <Route exact path='/panel' component={withRouter(Panel)}/>
            <Route exact path='/shop' component={withRouter(Shop)}/>
            <Route exact path='/account' component={withRouter(Tes_acc)}/>
        </Switch>
        </>
    )
}
export default App;