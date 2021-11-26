import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GridItem from './GridItem';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';
import './grid-item.css';

export default {
    title: 'GameOfLife/GridItem',
    component: GridItem,
} as ComponentMeta<typeof GridItem>;

const Template: ComponentStory<typeof GridItem> = args => (
    <Provider store={store}>
        <GridItem {...args} />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {
    row: 1,
    col: 1,
    customStyle: {
        gridRowStart: 1,
        gridColumnStart: 1,
    },
};

export const Active = Template.bind({});
Active.args = {
    row: 0,
    col: 0,
    customStyle: {
        gridRowStart: 1,
        gridColumnStart: 1,
        backgroundColor: 'green',
        width: 10,
        height: 10,
    },
};
