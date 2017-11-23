import React from 'React';
import Post from './Post';
import renderer from 'react-test-renderer';

it('Post should match snapshot', () => {
    const props = {
        data: {
            id: '1',
            permalink: '2',
            preview: {
                images: {
                    0: {
                        source: {
                            url: '3'
                        }
                    }
                }
            },
            score: '4',
            subreddit: '5',
            author: '6'
        }
    }
    const post = renderer
        .create(
            <Post data={props} />)
        .toJSON();
    expect(post).toMatchSnapshot();
});
