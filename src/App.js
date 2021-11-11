import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { HomePage, EmployeesPage } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/employees' component={EmployeesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
