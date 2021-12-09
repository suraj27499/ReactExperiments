import React, { useContext } from 'react';
import { context } from '../App';

export function ContextApi1Counter() {

    const obj = useContext(context);
    const { value, setValue } = obj;//destructuring object -- this isnot useState()
    return (
        <div>
            <button onClick={() => { setValue(value + 1) }}>button - {value}</button>
        </div>
    )
}
