import React from 'react'




export default function ButtonComponent(props) {
    return (
        <button style={{ background: props.color }}> {props.children.toUpperCase()}</button>

    )
}

