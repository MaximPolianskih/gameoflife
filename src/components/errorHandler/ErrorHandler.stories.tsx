import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorHandler } from './ErrorHandler';
import { render } from '@testing-library/react';

export default {
  title: 'GameOfLife/ErrorHandler',
  component: ErrorHandler,
} as ComponentMeta<typeof ErrorHandler>;

class WrappedComponent extends React.Component<{}, { isClick:boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isClick: false };
  }
  render() {
    if (this.state.isClick) {
      throw new Error('I crashed!');
    }
    return (
      <button onClick={() => {
          this.setState({ isClick: true });
        }}
      >
        Нажать для вызова ошибки
      </button>
    );
  }
}

export const Default = () => (
  <ErrorHandler>
    <WrappedComponent />
  </ErrorHandler>
);
