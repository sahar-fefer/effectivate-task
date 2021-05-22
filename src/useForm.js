import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [allContactsId, setAllContactsId] = useState([1]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const typeConnection = `typeConnection${allContactsId[allContactsId.length - 1]}`
    setValues(values => ({ ...values, [typeConnection]: 'email' }));
  }, [allContactsId])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleAddContact = () => {
    setAllContactsId([...allContactsId, allContactsId.length + 1])
  }

  const handleRemoveContact = (id) => {
    setAllContactsId(allContactsId.filter(contactId => contactId !== id))
    const contactLabel = `contactLabel${id}`;
    const typeConnection = `typeConnection${id}`;
    const contactAddress = `contactAddress${id}`;
    const newValues = { ...values };
    delete newValues[contactLabel];
    delete newValues[typeConnection];
    delete newValues[contactAddress];
    setValues({...newValues});
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values, allContactsId));
    setIsSubmitting(true);
    console.log('values', values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleAddContact,
    handleRemoveContact,
    handleChange,
    handleSubmit,
    allContactsId,
    values,
    errors,
  }
};

export default useForm;