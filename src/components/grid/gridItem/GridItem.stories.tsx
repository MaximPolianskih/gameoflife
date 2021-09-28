import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GridItem from './GridItem';

export default {
  title: 'GameOfLife/GridItem',
  component: GridItem,
} as ComponentMeta<typeof GridItem>;

const Template: ComponentStory<typeof GridItem> = (args) => <GridItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false
};

export const Active = Template.bind({});
Active.args = {
  col: 1,
  row: 2,
  isActive: true
}; 