import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestComponent, TestComponentVariant } from '.';

export default {
  title: 'TestComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

export const Primary: ComponentStory<typeof TestComponent> = args => (
  <TestComponent variant={TestComponentVariant.PRIMARY} value="Buy now"></TestComponent>
);

export const Secondary: ComponentStory<typeof TestComponent> = args => (
  <TestComponent variant={TestComponentVariant.SECONDARY} value="See All Games"></TestComponent>
);
