import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastname: 'kumar'
        }
    }

    changeLastName = () => {
        this.setState({
            lastname: 'dubey'
        });
    }
    render() {
        return (
            <div>
                <h3>This is a class component. {this.props.name}--{this.state.lastname}</h3>
                <button onClick={() => { this.changeLastName() }}>changeLastName</button>
            </div>
        );
    }
}

export default ClassComponent;