import React, { Component } from 'react'

export class CountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countValue: 0,
        }
        //binding "this" here for clickBinder  in constructor
        this.clickBinder = this.clickBinder.bind(this);
    }

    counter = () => {
        this.setState((prevState, props) => ({
            //props not used here as there is no props 
            countValue: prevState.countValue + 1,
        }), () => { console.log("I am a callback function called just after state change") }
        );
    }
    clickBinder = () => {
        this.setState((prevState) => ({
            countValue: prevState.countValue + 1,
        }), () => { console.log("I am a callback function called just after state change") }
        );
    }
    render() {
        return (
            <div>
                Count:{this.state.countValue}
                <br>
                </br>
                {/*No need to bind this below*/}
                <button onClick={() => { this.counter() }}>Counter</button>
                {/*but if binding needed for "this"-->do like this*/}
                <button onClick={this.clickBinder}>Counter 2</button>
            </div>
        )
    }
}


