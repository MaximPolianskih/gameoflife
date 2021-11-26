import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Options } from './Options';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

export default {
    title: 'GameOfLife/Option',
    component: Options,
} as ComponentMeta<typeof Options>;

const Template: ComponentStory<typeof Options> = args => (
    <Provider store={store}>
        <Options {...args} />
    </Provider>
);
export const Default = Template.bind({});
Default.args = {};
