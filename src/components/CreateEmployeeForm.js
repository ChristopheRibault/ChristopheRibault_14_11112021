import styled from 'styled-components';

const CreateEmployeeForm = function() {

  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 400px;
  `;

  const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
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

  return (
    <StyledForm action="#" id="create-employee">
      <InputWrapper>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" />
      </InputWrapper>

      <InputWrapper>
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" />
      </InputWrapper>

      <InputWrapper>
        <label for="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />
      </InputWrapper>

      <InputWrapper>
        <label for="start-date">Start Date</label>
        <input id="start-date" type="text" />
      </InputWrapper>

      <FieldSetWrapper className="address">
        <legend>Address</legend>
        <InputWrapper>
          <label for="street">Street</label>
          <input id="street" type="text" />
        </InputWrapper>

        <InputWrapper>
          <label for="city">City</label>
          <input id="city" type="text" />
        </InputWrapper>

        <InputWrapper>
          <label for="state">State</label>
          <select name="state" id="state"></select>
        </InputWrapper>

        <InputWrapper>
          <label for="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </InputWrapper>
      </FieldSetWrapper>

      <InputWrapper>
        <label for="department">Department</label>
        <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
      </InputWrapper>
      <StyledBtn type='submit'>Save</StyledBtn>

    </StyledForm>
  );
};

export default CreateEmployeeForm;
