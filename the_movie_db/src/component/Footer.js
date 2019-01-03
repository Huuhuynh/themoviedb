import React, { Component } from 'react';

class Footer extends Component {
    render()
    {
        return (
            <div>
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
export default Footer;
