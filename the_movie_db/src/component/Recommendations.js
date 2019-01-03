import React, { Component } from 'react';
import axios from 'axios';
import {URL_DETAIL,URL_YOUTUBE,API_KEY} from "./Const";
import {URL_IMG, IMG_SIZE_XSMALL} from "./Const";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Recommendations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            movie_id: this.props.movie_id
        }
        this.getIdRecommendations =  this.getIdRecommendations.bind(this);
    }

    getIdRecommendations(movie_id ){
        axios.get(`${URL_DETAIL}${movie_id}/recommendations${API_KEY}`)
            .then(res=>{
                const posts = res.data.results.map(obj=>({
                    id:obj.id, backdrop_path:obj.backdrop_path, site:obj.site, name: obj.name
                }));
                console.log(res.data);
                this.setState({posts});
            })
    }

    componentDidMount() {
        this.getIdRecommendations(this.state.movie_id);
    }
    renderDetail(){
        return(
            <div>
                <h2 style={{marginLeft: "20px", textAlign: "left"}}>Recommendations</h2>
                <div className="w3-row-padding w3-padding-16 w3-center" id="food"  style={{ width: "100%",height: "220px", overflowX: "scroll"}}>
                    {
                        this.state.posts.map(function(index, id){
                                return(
                                    <div key={id} className="w3-quarter">
                                        <div >
                                            <h1>{index.name}</h1>
                                            <img  src={URL_IMG+IMG_SIZE_XSMALL+ index.backdrop_path}/>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>

            </div>
        );
    }
    render()
    {
        return (
            <div>
                <div >
                    {this.renderDetail()}
                </div>
                <div style={{marginLeft: "20px", textAlign: "left" ,fontSize :"22px"}}>
                    <Link to={{pathname: `/full_recommendations/${this.props.movie_id}`}}>Full Recommendations</Link>
                </div>


            </div>


        );
    }
}
export default Recommendations;
