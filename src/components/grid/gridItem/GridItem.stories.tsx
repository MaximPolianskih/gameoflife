import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import GridItem from './GridItem';

export default {
    title: 'GameOfLife/GridItem',
    component: GridItem,
} as ComponentMeta<typeof GridItem>;

const Template: ComponentStory<typeof GridItem> = args => (
    <GridItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    isActive: false,
    customStyle: {width: 10, height: 10},
};

export const Active = Template.bind({});
Active.args = {
    isActive: true,
    customStyle: {width: 10, height: 10},
};
