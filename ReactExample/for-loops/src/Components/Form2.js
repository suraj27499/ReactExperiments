import React from 'react';
import { useState } from "react";
import "../App.css";


export function Form2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("");
    const [cricket, setCricket] = useState(false);
    const [badminton, setBadminton] = useState(false);
    const [voleyball, setVolleyball] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        alert(name + "\n" + email + "\n" + password + "\n" + gender + "\n" +
            city + `\nPlays: ${cricket ? "cricket," : ""}${badminton ? "badminton," : ""}${voleyball ? "volleyball," : ""}`);
    }

    return (
        <div className="formStyle">
            <form onSubmit={submitHandler} >
                <fieldset>
                    <legend>User Details</legend>
                    <label htmlFor="name" >Name:</label><br></br>
                    <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }}></input><br></br>
                    <label htmlFor="email" >Email:</label><br></br>
                    <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br></br>
                    <label for="password" >Password:</label><br></br>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                    <input type="radio" id="male" name="gender" value="male" onClick={(e) => setGender(e.target.value)}></input>
                    <label htmlFor="male" >Male</label><br />
                    <input type="radio" id="female" name="gender" value="female" onClick={(e) => setGender(e.target.value)}></input>
                    <label htmlFor="female" >FeMale</label><br /><br />
                    <label >City:</label><br />
                    <select onChange={(e) => { setCity(e.target.value) }}>
                        <option value="muzaffarpur">Muzaffarpur</option>
                        <option value="patna">Patna</option>
                        <option value="gaya">Gaya</option>
                    </select><br />
                    <label >Sports:</label><br />
                    <input type="checkbox" onClick={(e) => { setCricket(!cricket) }} />
                    <label >Cricket</label><br />
                    <input type="checkbox" onClick={(e) => { setBadminton(!badminton) }} />
                    <label >Badminton</label><br />
                    <input type="checkbox" onClick={(e) => { setVolleyball(!voleyball) }} />
                    <label >Volleyball</label><br />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}