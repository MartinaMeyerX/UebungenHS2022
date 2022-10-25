import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { clear } from "@testing-library/user-event/dist/clear";
import { Typography } from "@mui/material";


var timer = ""

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {time: timer, render: true}
        this.updateTime = this.updateTime.bind(this);
        this.buttonclicked = this.buttonclicked.bind(this);
    }

    buttonclicked(event) {
        if (timer % 1 === 0){
            clearInterval(clear);
            this.setState({time: timer, render: false});
            clear = setInterval(this.updateTime, 1000);
        }
    }

    resetTimer(event) {
        timer = event.target.value;
    }

    updateTime() {
        if (this.state.time > 1) {
            this.setState({time: this.state.time - 1});
        }
        else {
            this.setState({time:"FERTIG", render: true});
        }
    }

    render() {
        return (
        <>
        {this.state.render &&
            <Grid container style={{margin: 8}}>
                <TextField placeholder={'Geben Sie eine Zahl ein'} type = "number" step = "1" onChange={this.resetTimer}/>
            </Grid>
        }
        <Grid container style={{margin:10}}>
            <Typography variant="h5" align="left">{this.state.time}</Typography>
        </Grid>
        <Grid container style={{margin:8}}>
            <Button variant="contained" onClick={this.buttonclicked}>Start</Button>
        </Grid>
        </>)
    }
}

export default Timer;