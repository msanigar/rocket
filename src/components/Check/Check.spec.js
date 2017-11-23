import React from 'React';
import Check from './Check';
import renderer from 'react-test-renderer';

it('Check should match snapshot', () => {
    const check = renderer
        .create(
            <Check />)
        .toJSON();
    expect(check).toMatchSnapshot();
});
