import cn from 'classnames';
import Grid from './components/grid/Grid';

function App() {
  return (
    <div className={cn(App.name)}>
      <label>Game of life</label>
      <Grid cols={20} rows={20} />
    </div>
  );
}

export default App;
