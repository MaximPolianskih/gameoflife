import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GridItem from './GridItem';

export default {
  title: 'GridItem',
  component: GridItem,
} as ComponentMeta<typeof GridItem>;

const Template: ComponentStory<typeof GridItem> = (args) => <GridItem {...args} />;

export const Default = Template.bind({});
