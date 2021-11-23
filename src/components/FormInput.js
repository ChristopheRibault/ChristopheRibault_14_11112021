import styled from 'styled-components';
import { Select, MenuItem } from '@mui/material';
import DatePicker from '@tof28/react-datepicker';

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 250px;
`;

const StyledSelect = styled(Select)`
  height: 25px;
`;

const FormInput = function({
  inputData,
  handleChange,
  value,
}) {

  const {
    name,
    label,
    type = 'text',
    selectItems,
    required,
    pattern,
  } = inputData;

  let input;

  switch (type) {
    case 'select':
      input = 
        <StyledSelect
          name={name}
          value={value || selectItems[0]?.value || selectItems[0] || ''}
          id={name}
          onChange={handleChange}
          required={required}
          pattern={pattern}
        >
          {!!selectItems?.length && selectItems?.map(item => (
            <MenuItem
              key={item.value || item}
              value={item.value || item}
            >{item.text || item}</MenuItem>
          ))}
        </StyledSelect>;
      break;

    case 'datepickr':
      input = 
        <DatePicker
          name={name}
          selected={new Date()}
          onChange={handleChange}
          required={required}
          pattern={pattern}
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
        required={required}
        pattern={pattern}
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
