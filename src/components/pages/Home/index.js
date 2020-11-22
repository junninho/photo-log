import React from 'react';
import { Button } from '@material-ui/core';

import './Home.css'

export default class Home extends React.Component {
    render() {
        return(
            <div className="Home">
                <div className="inner-home">
                    <h1>Welcome to your Photo Log</h1>
                    <p>To begin, click the upload button below to upload new photos</p>
                    <Button variant="contained" color="primary" href="/upload">
                        Get Started
                    </Button>
                </div>
            </div>
        )
    }
}