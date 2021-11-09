import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SpeedRegulator from './SpeedRegulator';

export default {
    title: 'GameOfLife/SpeedRegulator',
    component: SpeedRegulator,
} as ComponentMeta<typeof SpeedRegulator>;

const Template: ComponentStory<typeof SpeedRegulator> = args => (
    <SpeedRegulator {...args} />
);
export const Default = Template.bind({});
Default.args = {
    clickHandler: (speed: number) => {},
};
