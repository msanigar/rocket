import React from 'react';
import { Strong } from './styles';

const decodeHTMLEntities = (text) => {
    const entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (let i = 0, max = entities.length; i < max; ++i)
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}

const Post = (props) => {
    const { data } = props.data;
    const r = '/r/';
    const reddit = 'http://reddit.com/';
    return(
        <div key={data.id} className="row post">
            <div className="column column-25">
                <a href={reddit + data.permalink}><img className="placeholder" src={data.preview ? decodeHTMLEntities(data.preview.images[0].source.url) : 'build/img/on_color_large.png'} /></a>
                <p className="center"><small>points: {data.score}</small></p>
            </div>
            <div className="column column-75">
                <p>
                <strong>{data.title}</strong>
                </p>
                <p><small>{r}{data.subreddit}</small> |
                <small>author: {data.author}</small> |
                <small><em><a href={reddit + data.permalink}>view on reddit.com</a></em></small></p>
            </div>
        </div>
    );
}

export default Post;
