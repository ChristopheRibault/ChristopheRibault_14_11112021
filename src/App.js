import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import { HomePage, EmployeesPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/employees' component={EmployeesPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
