import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/">
            <HomePage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
