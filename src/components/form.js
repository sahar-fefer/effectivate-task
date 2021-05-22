import { useState } from "react";
import useForm from "../useForm";
import validate from '../validations';
import ContactForm from "./contactForm";
import ProfileForm from "./profileForm";

const Form = () => {
    const [isUpload, setIsUpload] = useState(false);

    const {
        values,
        errors,
        allContactsId,
        handleAddContact,
        handleRemoveContact,
        handleChange,
        handleSubmit,
    } = useForm(upload, validate);

    function upload() {
        setIsUpload(true)
        console.log('upload!')
    }

    return (
        <div className='form-container' onSubmit={handleSubmit} noValidate>
            <ProfileForm values={values} errors={errors} handleChange={handleChange} />
            <section>
                <header>Contact Info</header>
                <div className='contact-form-wrapper'>
                    {allContactsId.map((i) => (
                        <ContactForm values={values} errors={errors} handleChange={handleChange} handleRemoveContact={handleRemoveContact} id={i} key={i} />
                    ))}
                </div>
            </section>
            <div>
                <button onClick={handleAddContact} className="button add-contact-btn" >Add Contact</button>
                <button className="button submit-btn" onClick={handleSubmit}>Save User Profile</button>
            </div>
        </div>
    );
}

export default Form;