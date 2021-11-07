import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Options from './Options';

export default {
  title: 'GameOfLife/Option',
  component: Options,
} as ComponentMeta<typeof Options>;

export const Default = () => <Options userName={ "TestUserName" }/>;
