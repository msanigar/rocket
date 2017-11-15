import React from 'react';

const Post = (props) => {
    const { data } = props;
    return(
        <div key={data.data.id}>
            <p>{data.data.subreddit}</p>
            <p>{data.data.title}</p>
        </div>
    );
}

export default Post