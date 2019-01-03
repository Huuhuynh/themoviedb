import React, { Component } from 'react';
import './App.css';
import RouterURL from "./component/RouterURL";
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render()
        {
            return (
                <Router>
                    <div className="App ">
                        <RouterURL/>
                    </div>
                </Router>

            );
        }
}
export default App;
