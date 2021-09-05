import cn from 'classnames';
import Grid from './components/grid/Grid';
import React from 'react';

function App() {
  return (
    <div className={cn(App.name)}>
      <label>Game of life</label>
      <Grid cols={20} rows={20} />
    </div>
  );
}

export default App;
