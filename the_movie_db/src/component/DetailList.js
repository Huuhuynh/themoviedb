import React from 'react'

class DetailList extends React.Component{
    details(){
        const url = "/details" + this.props.movie.id
        window.location.href = url
    }
    render(){
        return(
            <div>
                <input key={this.props.movie.id} type="button" onClick={this.details.bind(this)} value="View"/>
            </div>
        )
    }
}
export default DetailList;