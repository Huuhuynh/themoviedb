import React, { Component } from 'react';
import axios from 'axios';
import {URL_DETAIL,URL_YOUTUBE,API_KEY} from "./Const";
import {Position} from 'react-bootstrap';

class Trailer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            movie_id: this.props.movie_id
        }
    }

    componentDidMount() {
       this.getId(this.state.movie_id)
    }
    getId(movie_id){
        axios.get(`${URL_DETAIL}${movie_id}/videos${API_KEY}`)
            .then(res=>{
                const posts = res.data.results.map(obj=>({
                  id:obj.id, key:obj.key, site:obj.site, name: obj.name
                }));
                console.log(posts);
                this.setState({posts});
            })
    }
    renderDetail(){
        return(
            <div>
                <h2 style={{marginLeft: "20px", textAlign: "left"}}>Trailer</h2>
                <div className="w3-row-padding w3-padding-16 w3-center" id="food">
                    {this.state.posts.map(function (index , id) {
                        if (id < 2){
                            return(
                                <div className="w3-quarter"  style={{width: "50%"}}  key={id}>
                                    <div>
                                        <iframe  src={URL_YOUTUBE + index.key} frameBorder={0} allowFullScreen></iframe>
                                    </div>
                                </div>
                            )
                        }
                    })}
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
export default Trailer;
