import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Lookbook from "./components/Lookbook";
import Blog from "./components/Blog";
import Gray from "./components/Gray"
import Sale from "./components/Sale"
import Womens from "./components/Womens"
import Goods from "./components/Goods"
import Goods2 from "./components/Goods2"
import Mens from "./components/Mens"
import Accessories from "./components/Accessories"
import Goods3 from "./components/Goods3"
import Goods4 from "./components/Goods4"
import Goods5 from "./components/Goods5"
import Goods6 from "./components/Goods6"
import Goods7 from "./components/Goods7"
import Goods8 from "./components/Goods8"
import Homegoods from "./components/Homegoods"
import Homegoods1 from "./components/Homegoods1"
import Homegoods2 from "./components/Homegoods2"
import Collection from "./components/Collection";

const App = () => {
    return (
        <>
        <Router>
         <Navbar />
         <Gray />
         
           <Switch>
            <Route path="/" components ={Home} exact><Home /></Route>
            <Route path="/lookbook" components ={Lookbook} exact><Lookbook /></Route>
            <Route path="/blog" components ={Blog} exact><Blog /></Route>
            <Route path="/sale" components ={Sale} exact><Sale /></Route>
            <Route path="/womens" components ={Womens} exact><Womens /></Route>
            <Route path="/goods" components ={Goods} exact><Goods /></Route>
            <Route path="/goods2" components ={Goods2} exact><Goods2 /></Route>
            <Route path="/goods2" components ={Goods2} exact><Goods2 /></Route>
            <Route path="/mens" components ={Mens} exact><Mens /></Route>
            <Route path="/accessories" components ={Accessories} exact><Accessories /></Route>
            <Route path="/goods3" components ={Goods3} exact><Goods3 /></Route>
            <Route path="/goods4" components ={Goods4} exact><Goods4 /></Route>
            <Route path="/goods5" components ={Goods5} exact><Goods5 /></Route>
            <Route path="/goods6" components ={Goods6} exact><Goods6 /></Route>
            <Route path="/goods7" components ={Goods7} exact><Goods7 /></Route>
            <Route path="/goods8" components ={Goods8} exact><Goods8 /></Route>
            <Route path="/homegoods" components ={Homegoods} exact><Homegoods /></Route>
            <Route path="/homegoods1" components ={Homegoods1} exact><Homegoods1 /></Route>
            <Route path="/homegoods2" components ={Homegoods2} exact><Homegoods2 /></Route>
            <Route path="/collection" components ={Collection} exact><Collection /></Route>

           </Switch>
         </Router>
        </>
    )
}

export default App;