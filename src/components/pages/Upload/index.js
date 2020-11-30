import React from 'react';
import { Button, TextField } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import axios from 'axios';

import './Upload.css'

export default class Upload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      successMessage : "",
      fileName: "",
      file: null,
      creationDate: null,
      cameraModel: "",
      category: "",
      size: 0
    }
  }
  
  handleChange = (ev) => {
    this.setState({success: false, url : ""});
    let file = ev.target.files[0];
    this.setState({file, fileName: file.name, creationDate: file.lastModified, size: file.size});
  }

  handleDateChange = (date) => {
    this.setState({creationDate: date})
  }

  handleTextChange = (field) => (ev) => {
    this.setState({[field]: ev.target.value});
  }

  // Perform the upload
  handleUpload = (ev) => {
    let file = this.state.file;
    console.log(file)
    console.log("Preparing the upload");
    const data = new FormData();
    data.append('file', file);
    data.append('fileName', this.state.fileName);
    data.append('creationDate', this.state.creationDate);
    data.append('cameraModel', this.state.cameraModel);
    data.append('category', this.state.category);
    data.append('size', this.state.size);
    axios.post("https://obscure-stream-03189.herokuapp.com/upload", data).then(res => {
      console.log(res.statusText);
      this.setState({successMessage: "File Uploaded!"})
    }).catch(err => {
      console.error(err);
    });
  }
  
  
  render() {
    return (
      <div className="Upload">
        <center>
          <h1>UPLOAD A FILE</h1>
          <Button variant="contained" color="primary" href="/upload" component="label">
            Choose File
            <input
              type="file"
              id="file"
              accept=".jpg, .png, .heif, .heic"
              onChange={this.handleChange}
              ref={(ref) => { this.uploadInput = ref; }}
              hidden
            />
          </Button>
          <p>{this.state.fileName}</p>
          <br/>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                required
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Creation Date"
                value={this.state.creationDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <br/>
            <TextField required label="File Name" value={this.state.fileName} onChange={this.handleTextChange('fileName')} />
            <br/>
            <TextField required label="Camera Model" value={this.state.cameraModel} onChange={this.handleTextChange('cameraModel')} />
            <br/>
            <TextField required label="Category" value={this.state.category} onChange={this.handleTextChange('category')} />
            <br/>
            <br/>
          </div>
          <button disabled={this.state.file == null} onClick={this.handleUpload}>UPLOAD</button>
          <div style={{padding:50}}>
            <h3 style={{color: 'green'}}>{this.state.successMessage}</h3>
            <br/>
          </div>
        </center>
      </div>
    );
  }
}