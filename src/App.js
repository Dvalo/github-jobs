import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SingleJob from './pages/SingleJob';

import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/job/:id' component={SingleJob} />
          <Route path='/search/description=:desc?full_time=:ft?location=:loc?' component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;

