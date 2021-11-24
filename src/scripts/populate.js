import axios from 'axios';
import { format, parseISO } from 'date-fns';

const states = 
  [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY',
  ];

  const departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal',
  ];

const mapper = (user) => {
  return {
    firstName: user.name.first,
    lastName: user.name.last,
    birthDate: format(parseISO(user.dob.date), 'MM/dd/yyyy'),
    startDate: format(parseISO(user.registered.date), 'MM/dd/yyyy'),
    street: user.location.street.name,
    city: user.location.city,
    zip: user.location.postcode,
    state: states[Math.floor(Math.random() * states.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
  };
};

const getUsers = async () => {
  return axios.get('https://randomuser.me/api/?results=300&nat=us')
    .then(res => res.data.results.map(mapper));
};

const populateUsers = async () => {
  const users = await getUsers();
  localStorage.setItem('employeesList', JSON.stringify(users));
};

export default populateUsers;
