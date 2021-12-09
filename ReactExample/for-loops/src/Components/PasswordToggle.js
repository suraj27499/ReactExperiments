import React, { useState } from 'react';

export function PasswordToggle() {

    const [type, setType] = useState('password');
    const [value, setValue] = useState('');
    const [show, setShow] = useState(true);

    const clickHandler = () => {
        if (show) {
            setType('text');
            setShow(!show);
        } else {
            setType('password');
            setShow(!show);

        }
    }
    return (
        <div>
            <input type={type} value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={clickHandler}>{show ? <b>Show</b> : <b>Hide</b>}</button>
        </div>
    )
}