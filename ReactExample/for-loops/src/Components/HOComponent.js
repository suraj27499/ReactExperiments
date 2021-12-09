import React, { Component } from 'react'

const HOComponent = (ParaComponent) => {
    class HOComponent extends Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }

            this.incrementHandler = this.incrementHandler.bind(this);
        }

        incrementHandler = () => {
            this.setState((prev) => {
                return ({ count: prev.count + 1 });
            })
        }
        render() {
            return (
                <div>
                    <ParaComponent count={this.state.count} inccount={this.incrementHandler} />
                </div>
            )
        }
    }
    return HOComponent;
}

export default HOComponent
