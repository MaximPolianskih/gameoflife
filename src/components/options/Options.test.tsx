import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from './Options';

afterEach(cleanup);

describe('Options component tests', () => {
  it('Change state test', async () => {
    render(<Options userName={ "TestUserName" }/>);
    expect(screen.queryByTestId('options-loader-lebel')).not.toBe(null);
    
    await new Promise((f) => setTimeout(f, 3000));

    expect(screen.queryByTestId('options-input-rows')).not.toBe(null);
    expect(screen.queryByTestId('options-input-cols')).not.toBe(null);
    expect(screen.queryByTestId('options-change-button')).not.toBe(null);
    expect(screen.queryByTestId('options-loader-lebel')).toBe(null);
  });
});
