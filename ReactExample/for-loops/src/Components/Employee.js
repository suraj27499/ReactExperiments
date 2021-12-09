import React from 'react'
import './Employee.css'

export default function Employee(props) {
    return (
        <li className="Employee">{props.name}---{props.age}</li>
    )
}
