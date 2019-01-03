import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import {IMG_SIZE_SMALL,API_KEY,URL_IMG,URL_DETAIL } from "./Const";
import $ from 'jquery';


var p=$('#fos p');
var divh=$('#fos').height();
while ($(p).outerHeight()>divh) {
    $(p).text(function (index, text) {
        return text.replace(/\W*\s(\S)*$/, '...');
    });
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state ={
            post : props.postData
        }
    }

    render()
    {
        return (
            <div style={{paddingLeft: '5px', paddingTop : "100px" }} className="col-xs-6 col-sm-6 col-lg-6">
                <div className="container" style={{marginTop: '30px'}}>
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="card" >
                                <div className="row" style = {{height: "278px"}}>
                                    <div className="col-sm-6 overlayTitle">
                                        <a id={this.state.post.id} href="#">
                                            <img  src={URL_IMG+IMG_SIZE_SMALL+ this.state.post.poster_path} className="rounded float-left sizeimg" alt = "" />
                                            <div className="overlay"><i className="fa fa-bookmark-o"></i></div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className= "info">
                                            <div className="backgroud">
                                                <div className={"c100 small p" + parseInt(100 * this.state.post.vote_average / 10, 10)} >
                                                    <span >{this.state.post.vote_average}</span>
                                                    <div className="slice">
                                                        <div className="bar"></div>
                                                        <div className="fill"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="left">
                                                <div id = "fos_title">
                                                    <p style={{fontSize: "20px", color:"#4274f4"}}>{this.state.post.title}</p>
                                                </div>
                                                <p id={this.state.post.id}>{this.state.post.release_date}</p>
                                            </div>
                                            <div id="fos">
                                                <p>{this.state.post.overview}</p>
                                            </div>

                                            <hr/>
                                            <Link to={{pathname: `/details/${this.state.post.id}`, "mm": this.state.post.id, "state": 1212}}>view</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Content;
