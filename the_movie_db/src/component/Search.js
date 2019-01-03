import React, { Component } from 'react';
import { URL_SEARCH, API_KEY_ALT} from "./Const";
import MovieRow from './MovieRow';
import $ from 'jquery'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={}
        this.performSearch("")
    }
    performSearch(searchTerm){
        // console.log("search moviedb")
        const  urlString = URL_SEARCH+ API_KEY_ALT+ "&query= ''"+ searchTerm
        $.ajax({
            url: urlString,
            success:(searchResults)=>{
                // console.log("fetched")
                // console.log(searchResults)
                const results = searchResults.results
                // console.log(results[0]);
                var movieRows =[]
                results.forEach((movie)=>{
                    // movie.poster_src = "https://image.tmdb.org/t/p/w185/"+ movie.poster_path
                    // console.log(movie.title)
                    const  movieRow =<MovieRow key={movie.movie_id} movie={movie}/>
                    movieRows.push(movieRow)
                })
                this.setState({rows: movieRows})
            },
            error:()=>{
                console.log("failed")
            }
        })
    }
    searchChangeHandler(event){
        console.log(event.target.value)
        const boundObject= this
        const searTerm = event.target.value
        boundObject.performSearch(searTerm)
    }
    renderDetail(){
        return(

            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." onChange={this.searchChangeHandler.bind(this)}/>
                    {this.state.rows}
                </form>
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
export default Search;
