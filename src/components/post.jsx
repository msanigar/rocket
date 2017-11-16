import React from 'react';

const Post = (props) => {
    const { data } = props.data;
    const r = '/r/';
    return(
        <div key={data.id} className="row post">
            <div className="column column-25">
                <a href={data.permalink}><img src={data.preview ? data.preview.images[0].source.url : 'build/img/on_color_large.png'} /></a>
                <p className="center"><small>points: {data.score}</small></p>
            </div>
            <div className="column column-75">
                <p>
                <strong>{data.title}</strong>
                </p>
                <p><small>{r}{data.subreddit}</small> | <small>author: {data.author}</small> | <small><em><a href={data.permalink}>view on reddit.com</a></em></small></p>
            </div>
        </div>
    );
}

export default Post