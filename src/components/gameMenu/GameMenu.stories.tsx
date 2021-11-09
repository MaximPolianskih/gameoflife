import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GameMenu from './gameMenu';

export default {
    title: 'GameOfLife/GameMenu',
    component: GameMenu,
} as ComponentMeta<typeof GameMenu>;

const Template: ComponentStory<typeof GameMenu> = args => <GameMenu />;
export const Default = Template.bind({});
