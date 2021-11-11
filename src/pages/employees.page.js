import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EmployeesTable } from '../components';

const EmployeesPage = function() {

  const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
  `;

  return (
    <PageWrapper>
      <h2>Current Employees</h2>
      <EmployeesTable />
      <Link to='/'>Home</Link>
    </PageWrapper>
  );
};

export default EmployeesPage;
