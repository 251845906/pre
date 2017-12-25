import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import { Provider} from 'react-redux';
import Index from './Components/Index/Index';
import Header from './Containers/Header/Header';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import configureStore from './redux/store'
let store = configureStore();
export default class Navrouter extends Component {
    render() {
        return (
        
                <Provider store={store}>
                    <Router>
                        <div>
                            <Header />
                            <Switch> {/*职匹配一次*/}
                                <Route exact path="/" component={Index} />
                                <Route exact path="/SignIn" component={SignIn} />
                                <Route exact path="/SignUp" component={SignUp} /> 
                            </Switch>
                        </div>
                    </Router>
                </Provider>
            
        )
    }
}