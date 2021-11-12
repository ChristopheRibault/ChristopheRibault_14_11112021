import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CreateEmployeeForm } from '../components';

const PageWrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin: 1em;
`;

const HomePage = function() {

  return (
    <PageWrapper>
      <h1>HRnet</h1>
      <Link to='/employees'>View current employees</Link>
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
    </PageWrapper>
  );
};

export default HomePage;
