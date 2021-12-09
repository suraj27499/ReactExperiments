import React, { Component } from 'react'

import HOComponent from './HOComponent'


class Componenet1 extends Component {

    render() {
        const { count, inccount:handler } = this.props
        return (
            <div>
                <button onClick={handler}>Button1:-{count}</button>
            </div>
        )
    }
}

export default HOComponent(Componenet1);


