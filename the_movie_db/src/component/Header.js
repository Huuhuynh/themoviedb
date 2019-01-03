import React, { Component } from 'react';
import Search from "./Search";
import {  Link } from "react-router-dom";

class Header extends Component {
    render()
    {
        return (
                <div className="w3-top  ">
                    <div className="w3-bar w3-wide w3-padding w3-card" style={{background : "#081c24", color : "white"}}>
                        <Link to="/" className="w3-bar-item w3-button" ><b><img src="../img/logo.png" className="imglogo"/></b> Movies</Link>
                        <div className="w3-right w3-hide-small">
                            <Link to="/" className="w3-bar-item w3-button">Now Playing</Link>
                            <Link to="/popular" className="w3-bar-item w3-button">Popular</Link>
                            <Link to="/top_rated" className="w3-bar-item w3-button">Top Rated</Link>
                            <Link to="/upcoming" className="w3-bar-item w3-button">Upcoming</Link>
                        </div>
                    </div>
                    <Search/>
                </div>
        );
    }
}
export default Header;
