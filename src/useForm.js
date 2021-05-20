import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(()=> {
    setValues(values => ({ ...values, typeConnection: 'email' }));
  }, [])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values, setValues));
    setIsSubmitting(true);
    console.log('submit')
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    console.log('change')
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;