import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider} from 'react-redux';
import Index from './Components/Index/Index';
import configureStore from './redux/store'
let store = configureStore();
export default class Navrouter extends Component {
    render() {
        return (
        
                <Provider store={store}>
                    <Router>
                        <div>
                            <Switch> {/*职匹配一次*/}
                                <Route exact path="/" component={Index} />

                            </Switch>
                        </div>
                    </Router>
                </Provider>
            
        )
    }
}