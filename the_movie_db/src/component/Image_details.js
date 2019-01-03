import React, { Component } from 'react';
import axios from 'axios';
import {URL_DETAIL, URL_YOUTUBE, API_KEY, IMG_SIZE_DETAILS} from "./Const";
import {URL_IMG, IMG_SIZE_XSMALL} from "./Const";

class Image_details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            movie_id: 2
        }
        this.getImage = this.getImage.bind(this);
    }
    componentDidMount() {
        this.getImage(this.state.movie_id)
    }
    getImage(movie_id ){
        axios.get(`${URL_DETAIL}${movie_id}/images${API_KEY}`)
            .then(res=>{
                const posts = res.data.posters.map(object=>({
                    file_path:object.file_path, aspect_ratio:object.aspect_ratio
                }));
                 console.log(posts.file_path)
                this.setState({posts});
            })
    }
    render()
    {
        return (
            <div>
                {
                    function(index){
                        console.log(index)
                        return(
                            <div   >
                                <img  src={URL_IMG + IMG_SIZE_DETAILS + index.file_path}/>
                            </div>
                        )
                    }
                }
            </div>



        );
    }
}
export default Image_details;
