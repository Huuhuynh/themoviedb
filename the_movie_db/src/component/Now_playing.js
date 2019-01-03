import React, { Component } from 'react';
import axios from 'axios';
import {PAGE} from "./Const";
import {IMG_SIZE_SMALL,API_KEY,URL_IMG,URL_DETAIL } from "./Const";
import Header from "./Header";
import { Grid, Row, Col} from 'react-bootstrap';
import Content from "./Content";

class Now_playing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page : 2
        }
        this.Next= this.Next.bind(this);
        this.Previous= this.Previous.bind(this);
    }
    Next(){

        this.state.page += 1;
        this.getPage(this.state.page);
    }
    Previous(){
        this.state.page -= 1;
        this.getPage(this.state.page);
    }
    getPage(page) {
        axios.get(`${URL_DETAIL}now_playing${API_KEY}&page=${page}`)
            .then(res => {
                const posts = res.data.results.map(obj => ({
                    title: obj.title, overview: obj.overview , poster_path: obj.poster_path , release_date:obj.release_date,
                    vote_average: obj.vote_average, id:obj.id
                }));
                this.setState({ posts});
            });
    }
    componentDidMount() {
        this.getPage(this.state.page);
    }
    renderGid(){
        return(
            <div>
                {
                    this.state.posts.map(function(post){
                        console.log(post)
                        return(
                            <Content key={post.id} postData = {post}/>
                        )
                    })
                }
            </div>
        );}
    render()
    {
        return (
            <div>
                <Header/>
                <h1>Now Playing Movies</h1>
                    <Grid fluid={false}>
                        <Row >
                            {this.renderGid()}
                        </Row>
                    </Grid>
                    <div style={{marginTop: '10px', marginBottom: '10px'}}>
                        <input  onClick={this.Previous} type="button" className="btn btn-info" style={{marginRight: '10px' }} value="← Previous" />
                        <input onClick={this.Next} type="button" className="btn btn-info" value="Next →"/>
                    </div>
                    <div className="jumbotron text-center" style={{marginBottom: 0}}>
                        <p>Footer</p>
                    </div>
            </div>
        );
    }
}
export default Now_playing;
