import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import GameMenu from './GameMenu';

export default {
    title: 'GameOfLife/GameMenu',
    component: GameMenu,
} as ComponentMeta<typeof GameMenu>;

const Template: ComponentStory<typeof GameMenu> = args => <GameMenu/>;
export const Default = Template.bind({});
