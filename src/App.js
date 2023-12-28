import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
