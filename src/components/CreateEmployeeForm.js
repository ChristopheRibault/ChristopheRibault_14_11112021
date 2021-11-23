import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
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

const ModalButton = styled.button`
  color: #fff;
  background-color: #222;
  padding: 5px;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 100px;
  position: absolute;
  font-weight: bold;
  top: 0;
  right: 0;
  cursor: pointer;
  margin: 2px;
`;

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    paddingRight: '3em',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #555',
  },
};

Modal.setAppElement('#root');

const CreateEmployeeForm = function() {

  const dispatch = useDispatch();
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  
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
                    inputData={item}
                    key={item.name}
                    handleChange={handleChange}
                    value={values[item.name]}
                  />
                ))}
              </FieldSetWrapper>
            );
          } else {
            return <FormInput
              inputData={input}
              key={input.name}
              handleChange={handleChange}
              value={values[input.name]}
            />;
          }
        })
      }

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyle}
      >
        Employee created!
        <ModalButton
          className='close-btn'
          onClick={() => setModalIsOpen(false)}
        >X</ModalButton>
      </Modal>

      <StyledBtn type='submit' onClick={() => setModalIsOpen(true)}>Save</StyledBtn>

    </StyledForm>
  );
};

export default CreateEmployeeForm;
