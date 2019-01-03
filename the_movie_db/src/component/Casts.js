import React, { Component } from 'react';
import axios from 'axios';
import {URL_DETAIL,API_KEY} from "./Const";
import {URL_IMG, IMG_SIZE_XSMALL} from "./Const";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from "react-router-dom";


class Casts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            movie_id: this.props.movie_id
        }
    }
    getData(movie_id){
        axios.get(`${URL_DETAIL}${movie_id}/credits${API_KEY}`)
            .then(res=>{
                const posts = res.data.cast.map(obj=>({
                  profile_path:obj.profile_path, name: obj.name
                }));
                console.log(res.data);
                this.setState({posts});
            })
    }
    componentDidMount() {
        this.getData(this.state.movie_id)
    }
    renderDetail(){
        return(
            <div>
                <h2 style={{marginLeft: "20px", textAlign: "left"}}>Top Billed Cast</h2>
                <div className="w3-row-padding w3-padding-16 w3-center" id="food" style={{overflow: "-webkit-paged-x" }}>
                    {
                        this.state.posts.map(function(index , id){
                            if (id<5){
                                return(
                                    <div className="w3-quarter w3-card-4" key={id} style={{padding: "4px" , margin: "10px",width: "15%",height: "260px"}}>
                                        <div >
                                            <img  src={URL_IMG+IMG_SIZE_XSMALL+ index.profile_path}/>
                                            <p className="legend">{index.name}</p>
                                        </div>
                                    </div>
                            )
                            }else {
                            }
                        })
                    }
                </div>
                <div style={{marginLeft: "20px", textAlign: "left" ,fontSize :"22px"}}>
                    <Link to={{pathname: `/full_cast/${this.props.movie_id}`}}>Full Cast & Crew</Link>
                </div>


            </div>
        );
    }
    render()
    {
        return (
            <div >
                {this.renderDetail()}
            </div>
        );
    }
}
export default Casts;
