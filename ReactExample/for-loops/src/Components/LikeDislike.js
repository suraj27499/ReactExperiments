import React, { useState } from 'react';

export function LikeDislike() {
    const [like, setLike] = useState(true);

    return (
        <div>
            <button onClick={() => { setLike(!like) }}>{like ? <b>Like</b> : <b>Dislike</b>}</button>
        </div>
    )
}
