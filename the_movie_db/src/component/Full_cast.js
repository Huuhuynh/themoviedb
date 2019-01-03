import React, { Component } from 'react';
import axios from 'axios';
import {URL_DETAIL,API_KEY} from "./Const";
import {URL_IMG, IMG_SIZE_XSMALL} from "./Const";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./Header";

class Full_cast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        this.getDatas = this.getDatas.bind(this)
    }
    getDatas(movie_id){
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
        this.getDatas(this.props.match.params.movie_id)
    }
    renderDetail(){
        return(
            <div style={{paddingTop: "145px"}}>
                <h1>Full Casts</h1>
                <div className="w3-row-padding w3-padding-16 w3-center" id="food">
                    {
                        this.state.posts.map(function(index , id){
                                return(
                                    <div className="w3-quarter w3-card-4" key={id} style={{padding: "5px" , margin: "10px",width: "20.99999%",height: "260px"}}>
                                        <div >
                                            <img  src={URL_IMG+IMG_SIZE_XSMALL+ index.profile_path}/>
                                            <p className="legend">{index.name}</p>
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
            <div >
                <Header/>
                {this.renderDetail()}
            </div>
        );
    }
}
export default Full_cast;
