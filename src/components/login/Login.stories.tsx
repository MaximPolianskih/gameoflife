import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './Login';
import { LoginProcessEnum } from './LoginReducer';

export default {
  title: 'GameOfLife/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = args => <Login {...args} />;
export const Default = Template.bind({});
Default.args = {
  onChange: (row: number, col: number) => { },
  onLoginStatusChange: (loginStatus: LoginProcessEnum) => { }
};
