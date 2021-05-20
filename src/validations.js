export default function validate(values) {
    let errors = {};
    if (!values.userName) {
      errors.userName = 'Name is required!';
    }
    if (!values.contactLabel) {
      errors.contactLabel = 'Label is required!';
    }
    if (!values.contactAddress) {
      errors.contactAddress = 'Email/Phone no is required!';
    } else if (values.typeConnection === 'email' && !/\S+@\S+\.\S+/.test(values.contactAddress)) {
      errors.contactAddress = 'Email is not valid!';
    } else if (values.typeConnection === 'phone' && !/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/.test(values.contactAddress)) {
      errors.contactAddress = 'phone no. is not valid!';
    }
    return errors;
  };