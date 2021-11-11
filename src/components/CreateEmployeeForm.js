import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from '../utils/hooks';
import * as employeesActions from '../features/employees.feature';
import { FormInput } from '.';
import inputs from '../data/inputs.json';

const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 1em;
max-width: 400px;
`;

const FieldSetWrapper = styled.fieldset`
display: flex;
flex-direction: column;
gap: 1em;
`;

const StyledBtn = styled.button`
width: 80px;
align-self: center;
`;

const CreateEmployeeForm = function() {

  const dispatch = useDispatch();
  
  const { values, handleChange, handleSubmit } = useForm(() => {
    dispatch(employeesActions.add(values));
  });

  return (
    <StyledForm onSubmit={handleSubmit} id="create-employee">
      {
        inputs.map(input => {
          if (input.type === 'fieldset') {
            return (
              <FieldSetWrapper key={input.name}>
                <legend>{input.name}</legend>
                {input.items.map(item => (
                  <FormInput
                    key={item.name}
                    name={item.name}
                    handleChange={handleChange}
                    value={values[item.name]}
                    label={item.label}
                    type={item.type}
                    selectItems={item.selectItems}
                  />
                ))}
              </FieldSetWrapper>
            );
          } else {
            return <FormInput
              key={input.name}
              name={input.name}
              handleChange={handleChange}
              value={values[input.name]}
              label={input.label}
              type={input.type}
              selectItems={input.selectItems}
            />;
          }
        })
      }

      <StyledBtn type='submit'>Save</StyledBtn>

    </StyledForm>
  );
};

export default CreateEmployeeForm;
