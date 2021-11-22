import styled from 'styled-components';
import DatePicker from '@tof28/react-datepicker';

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 250px;
`;

const FormInput = function({ 
  name,
  handleChange,
  value,
  label,
  type = 'text',
  selectItems,
}) {

  let input;

  switch (type) {
    case 'select':
      input = 
        <select
          name={name}
          value={value}
          id={name}
          onChange={handleChange}
        >
          {!!selectItems?.length && selectItems?.map(item => (
            <option
              key={item.value || item}
              value={item.value || item}
            >{item.text || item}</option>
          ))}
        </select>;
      break;

    case 'datepickr':
      input = 
        <DatePicker
          name={name}
          selected={new Date()}
          onChange={handleChange}
        />;
      break;

    default:
      input = 
      <input 
        name={name}
        value={value || ''}
        type={type}
        id={name}
        onChange={handleChange}
      />;
      break;
  }

  return(
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      {input}
    </InputWrapper>
  );
};

export default FormInput;
