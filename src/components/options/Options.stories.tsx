import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Options from './Options';

export default {
    title: 'GameOfLife/Option',
    component: Options,
} as ComponentMeta<typeof Options>;

const Template: ComponentStory<typeof Options> = args => <Options {...args} />;
export const Default = Template.bind({});
Default.args = {
    userName: 'TestUserName',
    onChange: (row: number, col: number) => {},
};
