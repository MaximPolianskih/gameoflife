import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import SpeedRegulator from './SpeedRegulator';
import {store} from "../../../store/store";
import {Provider} from "react-redux";

export default {
    title: 'GameOfLife/SpeedRegulator',
    component: SpeedRegulator,
} as ComponentMeta<typeof SpeedRegulator>;

const Template: ComponentStory<typeof SpeedRegulator> = args => (
    <Provider store={store}>
        <SpeedRegulator {...args} />
    </Provider>
);
export const Default = Template.bind({});
Default.args = {
    clickHandler: (speed: number) => {
    },
};
