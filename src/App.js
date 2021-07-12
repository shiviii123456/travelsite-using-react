import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Service from "./component/pages/service";
import Contact from "./component/pages/contact";
import Error from "./component/pages/error";
import Footer from "./component/footer";

const App = () => {
    return (<Router>
        <Navbar />
        <Switch>
            <Route path="/" exact >
                <Home />
            </Route>
            <Route path="/about" >
                <About />
            </Route>
            <Route path="/service">
                <Service />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="*" exact >
                <Error />
            </Route>
        </Switch>
        <Footer />
    </Router>)
}
export default App;