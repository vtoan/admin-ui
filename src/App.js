import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./components/layout/Main";
import Navigator from "./components/common/Navigator";
import navigators from "./navigators";
import routes from "./route";
import React from "react";
// ====== context ====== //

function App() {
    const content = {
        nav: <Navigator navigators={navigators} />,
        main: (
            <Switch>
                {routes.map((item, index) => (
                    <Route key={+index} {...item} />
                ))}
            </Switch>
        ),
    };
    return (
        <Router>
            <MainLayout {...content} />;
        </Router>
    );
}
export default App;
