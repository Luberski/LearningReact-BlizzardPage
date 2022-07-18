import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonVariant } from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = args => (
  <Button variant={ButtonVariant.PRIMARY} value="Buy now"></Button>
);

export const Secondary: ComponentStory<typeof Button> = args => (
  <Button variant={ButtonVariant.SECONDARY} value="See All Games"></Button>
);
