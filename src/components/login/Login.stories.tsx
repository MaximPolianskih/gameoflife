import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './Login';
import { LoginProcessEnum } from './LoginReducer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

export default {
  title: 'GameOfLife/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = args => (
    <Provider store={store}>
        <Login {...args} />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {
};
