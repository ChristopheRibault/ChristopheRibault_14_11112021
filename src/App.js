import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomePage, EmployeesPage } from './pages';
import * as employeesActions from './features/employees.feature';
import populateUsers from './scripts/populate';

function App() {

  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(true);

  // Populate users for demo only
  useEffect(() => {
    async function populate() {
      await populateUsers();
      setLoading(false);
    }
    populate();
  }, []);

  useEffect(() => {
    const employeesList = JSON.parse(
      localStorage.getItem('employeesList'),
    ) || [];
    dispatch(employeesActions.set(employeesList));
  }, [ dispatch, loading ]);

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
