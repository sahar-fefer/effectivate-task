import { useState } from "react";
import useForm from "../useForm";
import validate from '../validations';

const Form = () => {
    const [isUpload, setIsUpload] = useState(false);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(upload, validate);

    function upload() {
        setIsUpload(true)
        console.log('upload!')
      }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="userName">Name</label>
                <input type="text" id="userName" name="userName" onChange={handleChange} value={values.userName || ''} required />
                  {errors.userName && (
                    <p className="is-error">{errors.userName}</p>
                  )}
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
                {errors.contactLabel && (
                    <p className="is-error">{errors.contactLabel}</p>
                  )}
            </div>
            <div>
                <label htmlFor="contactAddress">Email/Phone No.</label>
                <input type="text" id="contactAddress" name="contactAddress" onChange={handleChange} value={values.contactAddress || ''} required />
                {errors.contactAddress && (
                    <p className="is-error">{errors.contactAddress}</p>
                  )}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}

export default Form;