import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Grid from './Grid';
import {store} from "../../store/store";
import {Provider} from "react-redux";

export default {
    title: 'GameOfLife/Grid',
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = args => (
    <Provider store={store}>
        <Grid {...args} />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {};
