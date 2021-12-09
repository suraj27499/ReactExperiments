import React from 'react';
import { useState, useEffect } from 'react';
import { trackPromise, usePromiseTracker } from "react-promise-tracker";//to keep track of promise
import Loader from 'react-loader-spinner';



export function ApiComponent() {
    const url = "https://fakestoreapi.com/products";
    const [apiData, setApiData] = useState([]);
    const { promiseInProgress } = usePromiseTracker();

    //useEffect(() => {
    //fetch(url).then((response) => response.json()).then((result) => { return setApiData(result) });

    // async function fetchData() {
    //     let response = await fetch(url);
    //     let json = await response.json();
    //     setApiData(json);
    // }

    const fetchData = () => {
        trackPromise(fetch(url).then((response) => response.json()).then((result) => { return setApiData(result) }))
    }
    //}, [apiData]);

    if (promiseInProgress) {
        return (<Loader type="BallTriangle" color="white" height="100" width="100" />)
    } else {
        return (
            <>
                <button onClick={fetchData}>FetchData</button>
                <ul>
                    {
                        apiData.map((item) => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}