import { useState } from "react";

const Form = () => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        // event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        const { userName, userOrganization, typeConnection, contactLabel, contactAddress } = values;
        console.log('userName', userName ? userName : '');
        console.log('userOrganization', userOrganization ? userOrganization : '');
        console.log('typeConnection', typeConnection ? typeConnection : '');
        console.log('contactLabel', contactLabel ? contactLabel : '');
        console.log('contactAddress', contactAddress ? contactAddress : '');
        localStorage.setItem('userName', userName ? userName : '');
        localStorage.setItem('userOrganization', userOrganization ? userOrganization : '');
        localStorage.setItem('typeConnection', typeConnection ? typeConnection : '');
        localStorage.setItem('contactLabel', contactLabel ? contactLabel : '');
        localStorage.setItem('contactAddress', contactAddress ? contactAddress : '');
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="userName">Name</label>
                <input type="text" id="userName" name="userName" onChange={handleChange} value={values.userName || ''} required />
            </div>
            <div>
                <label htmlFor="userOrganization">Organization</label>
                <input type="text" id="userOrganization" name="userOrganization" onChange={handleChange} value={values.userOrganization || ''} />
            </div>
            <div>
                <label htmlFor="typeConnection">Type Of Contact</label>
                <select id="typeConnection" name="typeConnection" value={values.typeConnection || 'email'} onChange={handleChange}>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
            </div>
            <div>
                <label htmlFor="contactLabel">Contact Label</label>
                <input type="text" id="contactLabel" name="contactLabel" onChange={handleChange} value={values.contactLabel || ''} required />
            </div>
            <div>
                <label htmlFor="contactAddress">Email/Phone No.</label>
                <input type="text" id="contactAddress" name="contactAddress" onChange={handleChange} value={values.contactAddress || ''} required />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}

export default Form;