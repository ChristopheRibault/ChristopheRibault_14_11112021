import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomePage, EmployeesPage } from './pages';
import * as employeesActions from './features/employees.feature';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const employeesList = JSON.parse(
      localStorage.getItem('employeesList'),
    ) || [];
    dispatch(employeesActions.set(employeesList));
  }, [dispatch]);

  return (
    <div className='App' id='App'>
      <Router>
        <Switch>
          <Route 
            exact
            path='/'
            component={HomePage}
          />
          <Route
            path='/employees'
            component={EmployeesPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
