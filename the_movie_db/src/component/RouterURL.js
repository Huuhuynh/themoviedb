import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Now_playing from "./Now_playing";
import Popular from "./Popular";
import Top_rated from "./Top_rated";
import Upcoming from "./Upcoming";
import Details from "./Details";
import Full_cast from "./Full_cast";
import Full_recommendations from "./Full_recommendations";

class RouterURL extends Component {
    render()
    {
        return (
            <Router>
                <div>
                    <Route exact path="/" component ={Now_playing}/>
                    <Route path="/popular" component ={Popular}/>
                    <Route path="/top_rated" component ={Top_rated}/>
                    <Route path="/upcoming" component ={Upcoming}/>
                    <Route path={`/details/:id`} component={Details} />
                    <Route path={`/full_cast/:movie_id`} component={Full_cast} />
                    <Route path={`/full_recommendations/:movie_id`} component={Full_recommendations}/>
                </div>
            </Router>
        );
    }
}
export default RouterURL;
