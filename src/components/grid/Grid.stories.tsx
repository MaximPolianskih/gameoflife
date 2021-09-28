import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';

export default {
  title: 'GameOfLife/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default = () => <Grid cols={10} rows={10} />;
