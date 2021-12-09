import React, { Component } from 'react'

import HOComponent from './HOComponent'

class Component2 extends Component {

    render() {
        const { count, inccount: handler } = this.props
        return (
            <div>
                <button onMouseOver={handler}>Button2:- {count}</button>
            </div>
        )
    }
}

export default HOComponent(Component2);
