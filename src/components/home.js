import React, { Component } from 'react'
import {Cell, Grid} from "react-mdl";

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='home-grid'>
                    <Cell col={12}>
                        <img
                            src={process.env.PUBLIC_URL + '/images/profile.jpg'}
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Software Engineer</h1>
                            <hr/>
                            <p>Java | Python | Angular4 | React | Databases | DevOps | AWS</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;
