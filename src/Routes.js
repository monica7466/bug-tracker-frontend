import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/home"><Home/></Route>
                        <Route path="/*"><PageNotFound/></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
export default Routes;