import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Index from './Components/Index/Index';

export default class Navrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch> {/*职匹配一次*/}
                        <Route exact path="/" component={Index} />

                    </Switch>
                </div>
            </Router>
        )
    }
}