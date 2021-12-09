import React from 'react'
import Employee from './Employee'
import './Employee.css'

const employees = [
    { name: "suraj", age: 22 },
    { name: "raj", age: 32 },
    { name: "xyz", age: 56 },

]
export default function DisplayDetails() {
    return (
        <ol >
            {
                employees.map(
                    (employee) => {
                        return <Employee key={employee.name} name={employee.name.toString()} age={employee.age.toString()} />
                    }
                )

            }
        </ol>
    )
}
