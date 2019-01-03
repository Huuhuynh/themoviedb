import React from 'react'
import {IMG_SIZE_MIN, URL_IMG} from "./Const";

class MovieRow extends React.Component{
    viewMoive(){
        const url = "http://localhost:4321/details/" + this.props.movie.id
        window.location.href = url
    }
    render(){
        return<div classname="w3-container sidenav">
                    <div classname="w3-border">
                        <div classname="w3-container w3-margin w3-green">
                            <table key="{this.props.movie.movie_id}">
                                <tbody>
                                    <tr>
                                        <th>
                                            <input style={{textAlign: "left"}} className="fa fa-search" type ="text" onClick={this.viewMoive.bind(this)} value ={this.props.movie.title} ></input>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
             </div>
    }
}
export default MovieRow;