import styled from 'styled-components';

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

  const input = type === 'select' ?
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
    </select> :
    <input 
      name={name}
      value={value || ''}
      type={type}
      id={name}
      onChange={handleChange}
    />;

  return(
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      {input}
    </InputWrapper>
  );
};

export default FormInput;
