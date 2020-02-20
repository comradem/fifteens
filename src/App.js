import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import MainPage from "../src/pages/MainPage";


function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path='/main' render={ props => <MainPage {...props}/>}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
