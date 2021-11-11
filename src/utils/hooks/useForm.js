import { useState } from 'react';

/**
 * @typedef {Object} UseFormReturn
 * @property {object} values - The form values
 * @property {Function} handleChange
 * @property {Function} handleSubmit
 */

/**
 * @param {Function} cb Function to be called upon form submitting
 * @returns {UseFormReturn}
 */
const useForm = function(cb) {
  const [ values, setValues ] = useState({});

  return { 
    values,
    handleChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    handleSubmit: (e) => {
      e.preventDefault();
      cb();
    },
  };
};

export default useForm;
