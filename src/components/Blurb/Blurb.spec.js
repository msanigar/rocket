import React from 'React';
import Blurb from './Blurb';
import renderer from 'react-test-renderer';

it('Blurb should match snapshot', () => {
    const blurb = renderer
        .create(
            <Blurb />)
        .toJSON();
    expect(blurb).toMatchSnapshot();
});
