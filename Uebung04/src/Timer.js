import React, {Component} from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 50};
        // Event Handler
        this.decrease = this.decrease.bind(this);
        this.countdown = this.countdown.bind(this);
    }

    decrease() {
        this.setState({count: this.state.count - 1});
        if (this.state.count == 1) {
            this.setState = ({count: "FERTIG"}) }
        if (this.state.count == "FERTIG") {
            this.setState = ({count: "FERTIG"}) }
    }

    countdown() {
        this.state = {count: 51};
        // Event Handler
        this.decrease = this.decrease.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.decrease, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(<>
            <p>{this.state.count}</p>
            <button onClick={this.countdown}>Start</button>
        </>)
    }

}

export default Timer;