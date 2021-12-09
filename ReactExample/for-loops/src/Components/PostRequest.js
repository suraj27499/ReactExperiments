import React from 'react';

export function PostRequest() {
    const clickHandler = async () => {
        const POST_URL = "https://jsonplaceholder.typicode.com/posts";
        let y = await fetch(
            POST_URL,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
            }

        );
        alert(y);

    }

    return (
        <button onClick={clickHandler}>POST DATA</button>
    );
}