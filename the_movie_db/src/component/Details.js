import React, { Component } from 'react';
import axios from 'axios';
import {API_KEY, IMG_SIZE_DETAILS, URL_DETAIL, URL_IMG, IMG_SIZE_BACKGROUD, IMG_SIZE_SMALL} from "./Const";
import Trailer from "./Trailer";
import Casts from "./Casts";
import Recommendations from "./Recommendations";
import Header from "./Header";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object : {},
        }
        this.getData = this.getData.bind(this);
    }
    getData(movie_id){
        axios.get(`${URL_DETAIL}${movie_id}${API_KEY}`)
            .then(res =>{
              const object = res.data;
                Object.keys(object).map(() => (
                    {backdrop_path: object.backdrop_path, overview: object.overview, original_title:object.original_title ,
                production_companies:object.production_companies , title: object.title, release_date: object.release_date})
                )
                this.setState({object});
                }
            );
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.getData(this.props.match.params.id)
    }
    render()
    {
        return (
            <div>
                <Header/>
                <div style={{ paddingTop : "145px"}}>
                    <div className="row bodyDetail hero-image" style={{backgroundImage: 'linear-gradient(rgba(16.08%, 34.90%, 54.51%, 0.88), rgba(16.08%, 34.90%, 54.51%, 0.88)), url(https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg)' }}>

                        <div className="col-sm-4" style={{marginLeft: "270px" , marginTop: "70px"}}>
                            <img src ={URL_IMG + IMG_SIZE_DETAILS + this.state.object.backdrop_path} style={{ borderRadius: "3%"}}/>
                        </div>
                        <div className="col-sm-5" style={{marginTop: "30px", textAlign : "left" }}>
                            <h2 style={{fontSize: "2.4em" , color: "white" }}><b>{this.state.object.title}</b></h2>
                            <p style= {{fontSize: "1.3em" , color: "white"}}>Eelease date: {this.state.object.release_date}</p>
                            <h1 style={{color: "white",fontSize: "1.3em"}}>Overview</h1>
                            <p style={{fontSize: "1em" , color: "white"}}>{this.state.object.overview}</p>
                        </div>
                    </div>
                    <div className="w3-bar w3-light-grey" style={{height : "60px" , padding : "16px"}}>
                        <a href="#" className="w3-bar-item w3-button" style= {{marginLeft: "490px", marginRight : "40px", fontSize : "20px",padding: "0px 16px"}}>Discussions</a>
                        <a href="#" className="w3-bar-item w3-button" style= {{ marginRight : "40px", fontSize : "20px",padding: "0px 16px"}}>Reviews</a>
                        <a href="#" className="w3-bar-item w3-button" style= {{ marginRight : "40px", fontSize : "20px",padding: "0px 16px"}}>videos</a>
                        <a href="#" className="w3-bar-item w3-button" style= {{ marginRight : "40px", fontSize : "20px",padding: "0px 16px"}}>Images</a>
                        <a href="#" className="w3-bar-item w3-button" style= {{ marginRight : "40px", fontSize : "20px",padding: "0px 16px"}}>Changes</a>
                        <a href="#" className="w3-bar-item w3-button" style= {{ marginRight : "40px", fontSize : "20px",padding: "0px 16px"}}>Report</a>
                        <a href="#" className="w3-bar-item w3-button" style= {{ fontSize : "20px" ,padding: "0px 16px"}}>Share</a>
                    </div>
                    <div  className="w3-row" style={{width: "1700px" ,marginLeft: "300px"}}>
                        <div className="w3-col l8 s12" style={{width : "60%"}}>
                            <div className="w3-margin w3-white">
                                <Casts movie_id={this.props.match.params.id} />
                            </div>
                            <hr/>
                            <div className="w3-bar">
                                <a href="#" className="w3-bar-item w3-button" style={{marginLeft :"17px" ,fontSize : "20px"}}>Social</a>
                                <a href="#" className="w3-bar-item w3-button" style={{marginLeft :"17px" ,fontSize : "20px"}}>Review</a>
                                <a href="#" className="w3-bar-item w3-button" style={{marginLeft :"17px" ,fontSize : "20px"}}>Discussions 1</a>
                            </div>
                            <div className="w3-card" style={{width : "88%", marginLeft: "35px"}}>
                                <table>
                                    <tr>
                                        <td style={{padding :"20px"}}>This is probably the most overrated ...</td>
                                        <td style={{padding :"20px"}}>Open</td>
                                        <td style={{padding :"20px"}}>2</td>
                                        <td style={{padding :"20px", textAlign: "left"}}>Dec 17, 2018 at 8:56 PM<br/>
                                            by janviroy</td>
                                    </tr>
                                </table>
                            </div>
                            <br/>
                            <div className="w3-card " style={{width : "88%", marginLeft: "35px"}}>
                                <table>
                                    <tr>
                                        <td style={{padding :"20px"}}>This is probably the most overrated ...</td>
                                        <td style={{padding :"20px"}}>Open</td>
                                        <td style={{padding :"20px"}}>2</td>
                                        <td style={{padding :"20px", textAlign: "left"}}>Dec 17, 2018 at 8:56 PM<br/>
                                            by janviroy</td>
                                    </tr>
                                </table>
                            </div>
                            <br/>
                            <p style ={{textAlign : "left" , fontSize : "20px" , marginLeft : "33px", color: "#007bff"}}>Go to Discussions</p>
                            <hr/>
                            <div className="w3-margin w3-white">
                                <Trailer movie_id={this.props.match.params.id}/>
                            </div>
                            <div className="w3-margin w3-white">
                                <Recommendations movie_id={this.props.match.params.id}/>
                            </div>
                        </div>
                        <div className="w3-col l4 w3-light-grey" style={{width : "40%" }}>
                            <div className="w3-margin w3-margin-top " style={{textAlign: "left"}}>
                                <a href="#" className="fa fa-facebook" style={{borderRadius:"25%", padding: "10px",color : "white", background: "black", width : "30px" , heigth : "20px"}}></a>
                                <a href="#" className="fa fa-twitter" style={{ borderRadius :"25%", padding: "10px" ,marginLeft: "10px",color : "white", background: "black", width : "30px" , heigth : "20px"}}></a>
                                <a href="#" className="fa fa-instagram" style={{borderRadius :"25%",padding: "10px", marginLeft: "10px",color : "white", background: "black", width : "30px" , heigth : "20px"}}></a><br/><br/>
                                <strong>Facts</strong><br/>
                                <br/>
                                <strong>Original Title</strong><br/>
                                <i>Aquaman</i><br/><br/>
                                <strong>Status</strong><br/>
                                <i>Released</i><br/><br/>
                                <strong>Release Information</strong><br/>
                                <img src="../img/quocki.png" style={{width : "20px"}}/>
                                <i> December 21, 2018</i><br/><br/>
                                <strong>Original Language</strong><br/>
                                <i>Tiếng Anh</i><br/><br/>
                                <strong>Runtime</strong><br/>
                                <i>2h 23m</i><br/>
                                <br/>
                                <strong>Budget</strong><br/>
                                <i>$160,000,000.00</i><br/>
                                <br/>
                                <strong style={{marginTop : "20px"}}>Revenue</strong>
                                <br/>
                                <i>$750,000,000.00</i><br/><br/>
                                <strong>Genres</strong><br/><br/>
                                <p className="w3-card" style={{background : "white", width : "140px", borderRadius: "5px", textAlign: "center"}}>PHIM HANH DONG</p>
                                <p className="w3-card" style={{background : "white", width : "140px", borderRadius: "5px", textAlign: "center"}}>PHIM GIA TUONG</p>
                                <p className="w3-card" style={{background : "white", width : "220px", borderRadius: "5px", textAlign: "center"}}>PHIM KHOA HOC VIEN TUONG</p>
                                <p className="w3-card" style={{background : "white", width : "140px", borderRadius: "5px", textAlign: "center"}}>PHIM PHIEU LUU</p>
                                <strong>Keywords</strong><br/><br/>
                                <p className="w3-card" style={{background : "white", width : "95px", borderRadius: "5px", textAlign: "center"}}>dc comics</p>
                                <p className="w3-card" style={{background : "white", width : "150px", borderRadius: "5px", textAlign: "center"}}>duringcreditsstinger</p>
                                <p className="w3-card" style={{background : "white", width : "95px", borderRadius: "5px", textAlign: "center"}}>superhero</p>
                                <p className="w3-card" style={{background : "white", width : "120px", borderRadius: "5px", textAlign: "center"}}>based on comic</p>
                                <hr style={{width: "200px"}}/>
                                <h5>Content Score</h5>
                                <div className="w3-card" style={{background : "blue", width : "120px", borderRadius: "5px", textAlign: "center"}}>based on comic
                                    <div className="w3-card" style={{background : "white", width : "140px", borderRadius: "5px", textAlign: "center"}}></div>
                                </div>
                                <h5>Top Contributors</h5>
                                <table>
                                    <tr >
                                        <td style={{padding: "10px"}}>
                                            <img src="https://image.tmdb.org/t/p/w90_and_h90_face/hT033TcldYigJ8ZtmuxVQLRafkE.jpg" style={{borderRadius : "50%", width: "40px", height: "40px"}}/>
                                        </td>
                                        <td>
                                            <span><b>69</b></span>
                                            <br/>
                                            <i>zoulnix</i>
                                        </td>
                                    </tr>
                                </table>
                                <table>
                                    <tr >
                                        <td style={{padding: "10px"}}>
                                            <img src="https://image.tmdb.org/t/p/w90_and_h90_face/3aW3gX49J1WhXreMtnM2xXKnhXD.jpg" style={{borderRadius : "50%", width: "40px", height: "40px"}}/>
                                        </td>
                                        <td>
                                            <span><b>29</b></span>
                                            <br/>
                                            <i>sabya2k</i>
                                        </td>
                                    </tr>
                                </table>
                                <table>
                                    <tr >
                                        <td style={{padding: "10px"}}>
                                            <img src="https://image.tmdb.org/t/p/w90_and_h90_face/wh8tUGawnGeAtukheh0U2Lp6z9V.jpg" style={{borderRadius : "50%", width: "40px", height: "40px"}}/>
                                        </td>
                                        <td>
                                            <span><b>43</b></span>
                                            <br/>
                                            <i>Jessica Drew</i>
                                        </td>
                                    </tr>
                                </table>
                                <table>
                                    <tr >
                                        <td style={{padding: "10px"}}>
                                            <img src="https://image.tmdb.org/t/p/w90_and_h90_face/iuCAORyW9YUQ0enlSlZExZJjqBC.jpg" style={{borderRadius : "50%", width: "40px", height: "40px"}}/>
                                        </td>
                                        <td>
                                            <span><b>30</b></span>
                                            <br/>
                                            <i>Elizabeth Jennings</i>
                                        </td>
                                    </tr>
                                </table>
                                <span className="fa fa-play" style={{padding : "20px"}}> View Edit History</span><br/>
                                <h5 style={{padding: "15px"}}>Popularity Trend</h5>
                                <h5 className="w3-card " style={{height: "45px", width: "200px",textAlign: "center", padding: "11px", borderRadius: "23px",background: "black",
                                    color: "white"}}><i className="fa fa-lock"></i>  LOGIN TO EDIT</h5>
                            </div>

                        </div>
                    </div>
                    <div style={{backgroundImage :'url(../img/footer.png)', width : "1903px" , height : "450px"}}>
                        <div className="w3-row" >
                            <div className="w3-col m1 w3-center w3-grey">1</div>
                            <div className="w3-col m1 w3-center">2</div>
                            <div className="w3-col m1 w3-center w3-grey">3</div>
                            <div className="w3-col m1 w3-center">4</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Details;
