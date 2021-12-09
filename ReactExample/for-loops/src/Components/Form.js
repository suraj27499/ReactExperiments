import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordhandler = this.passwordhandler.bind(this);
    }

    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <form>
                <span>Name:<input type="text" value={this.state.name} onChange={this.nameHandler} /></span>
                <h4>{this.state.name}</h4>
                <span>Email:<input type="email" value={this.state.email} onChange={this.emailHandler} /></span>
                <h4>{this.state.email}</h4>
                <span>Password:<input type="password" value={this.state.password} onChange={this.passwordhandler} /></span>
                <h4>{this.state.password}</h4>
            </form>
        )
    }
}


