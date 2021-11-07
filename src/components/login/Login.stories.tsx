import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from './Login';

export default {
  title: 'GameOfLife/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

export const Default = () => <Login />;
