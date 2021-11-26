import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameMenu from './GameMenu';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

export default {
    title: 'GameOfLife/GameMenu',
    component: GameMenu,
} as ComponentMeta<typeof GameMenu>;

const Template: ComponentStory<typeof GameMenu> = args => (
    <Provider store={store}>
        <GameMenu/>
    </Provider>
);

export const Default = Template.bind({});
