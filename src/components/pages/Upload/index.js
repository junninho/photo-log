import React from 'react';
import EXIF from "exif-js";
import { Button } from '@material-ui/core';

import './Upload.css'

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            exif: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({
        target: {
            files: [file]
        }
    }) {
        let exifd = '';
        if (file && file.name) {
            this.setState({fileName: file.name});
            var that = this;
            EXIF.getData(file, function() {
                var exifData = EXIF.pretty(this);
                if (exifData) {
                    console.log(exifData);
                    that.setState({exif: exifData});
                // console.log(EXIF.getTag(this, "Orientation"));
                } else {
                    that.setState({exif: 'No EXIF data found in image'})
                    console.log("No EXIF data found in image");
              }
            })
        }
        this.setState({exif: exifd});
        console.log(exifd)
        }

    render() {
        return (
            <div className="Upload">
                <h1>Upload</h1>
                <Button variant="contained" color="primary" href="/upload" component="label">
                    Choose File
                    <input
                        type="file"
                        id="file"
                        accept=".jpg, .png, .heif, .heic"
                        onChange={this.handleChange}
                        hidden
                    />
                </Button>
                <p>{this.state.fileName}</p>
                <div>{this.state.exif}</div>
            </div>
        )
    }
}