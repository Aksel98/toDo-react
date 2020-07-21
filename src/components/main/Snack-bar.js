import React from "react";

export default class SnackBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isError: true}
    }

    componentDidMount() {
        this.setTime()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    setTime() {
        this.timer = setInterval(() => {
            this.setState({isError: false})
        }, 5000)
    }

    render() {
        return this.state.isError && <div className="snackbar">{this.props.errorText}</div>
    }
}
