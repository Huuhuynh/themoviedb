import React, { Component } from 'react';
import axios from 'axios';
import {URL_DETAIL,API_KEY} from "./Const";
import {URL_IMG, IMG_SIZE_XSMALL} from "./Const";
import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Full_recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        this.getIdFR =  this.getIdFR.bind(this);
    }

    getIdFR(movie_id ){
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
        this.getIdFR(this.props.match.params.movie_id);
    }
    renderDetail(){
        return(
            <div style={{paddingTop: "145px"}}>
                <h1>Recommendations</h1>
                <div className="w3-row-padding w3-padding-16 w3-center" id="food">
                    {
                        this.state.posts.map(function(index, id){
                                return(
                                    <div className="w3-quarter" key={id}>
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
            <div >
                <Header/>
                {this.renderDetail()}
            </div>
        );
    }
}
export default Full_recommendations;
