import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {ErrorHandler} from './ErrorHandler';

export default {
    title: 'GameOfLife/ErrorHandler',
    component: ErrorHandler,
} as ComponentMeta<typeof ErrorHandler>;

interface IState {
    isClicked: boolean
}

class WrappedComponent extends React.Component<{}, IState> {
    state = {isClicked: false};

    render() {
        if (this.state.isClicked) {
            throw new Error('I crashed!');
        }
        return (
            <button
                onClick={() => {
                    this.setState({isClicked: true});
                }}
            >
                Нажать для вызова ошибки
            </button>
        );
    }
}

export const Default = () => (
    <ErrorHandler>
        <WrappedComponent/>
    </ErrorHandler>
);
