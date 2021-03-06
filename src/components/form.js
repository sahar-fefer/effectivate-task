import useForm from "../useForm";
import validate from '../validations';
import ContactForm from "./contactForm";
import UploadedPopup from "./uploadedPopup";
import ProfileForm from "./profileForm";

const Form = () => {
    const {
        values,
        errors,
        allContactsId,
        isUpload,
        setIsUpload,
        handleAddContact,
        handleRemoveContact,
        handleChange,
        handleSubmit,
        handleClear,
    } = useForm(upload, validate);

    function upload() {
        setIsUpload(true)
        console.log('upload!')
    }

    return (
        <div className={`forms-container ${isUpload ? 'is-upload' : ''}`} onSubmit={handleSubmit} noValidate>
            <ProfileForm values={values} errors={errors} handleChange={handleChange} />
            <section>
                <header className='form-header'>Contact Info</header>
                <div className='contact-form-wrapper'>
                    {allContactsId.map((i) => (
                        <ContactForm values={values} errors={errors} handleChange={handleChange} handleRemoveContact={handleRemoveContact} id={i} key={i} />
                    ))}
                </div>
            </section>
            <div className='buttons-line'>
                <button className="add-contact-btn" onClick={handleAddContact}>Add Contact</button>
                <button className="submit-btn" onClick={handleSubmit}>Save User Profile</button>
            </div>
            {
                isUpload &&
                <UploadedPopup values={values} allContactsId={allContactsId} handleClear={handleClear} />
            }
        </div>
    );
}
export default Form;