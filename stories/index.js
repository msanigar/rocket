import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Blurb from '../src/components/Blurb/Blurb';
import Check from '../src/components/Check/Check';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Blurb', module)
  .add('without prop', () => <Blurb />)
  .add('with prop', () => <Blurb prop={'myles!'} />);

storiesOf('Check', module)
  .add('i dunno', () => <Check />)