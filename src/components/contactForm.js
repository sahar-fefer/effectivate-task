// const ContactForm = ({ values, errors, handleChange, handleRemoveContact, id }) => {
//     return (
//         <form className='contact-form form'>
//             <div className='half-field'> {/* <-- find better className  */}
//                 <div className='field'>
//                     <label htmlFor="typeConnection">Type Of Contact</label>
//                     <select id="typeConnection" name="typeConnection" value={values.typeConnection || 'email'} onChange={handleChange}>
//                         <option value="email">Email</option>
//                         <option value="phone">Phone</option>
//                     </select>
//                 </div>
//                 <div className='field'>
//                     <label htmlFor="contactLabel">Contact Label</label>
//                     <input type="text" id="contactLabel" name="contactLabel" onChange={handleChange} value={values.contactLabel || ''} required />
//                     {errors.contactLabel && (
//                         <p className="is-error">{errors.contactLabel}</p>
//                     )}
//                 </div>
//             </div>
//             <div className='half-field'> {/* <-- find better className  */}
//                 <div className='field'>
//                     <label htmlFor="contactAddress">Email/Phone No.</label>
//                     <input type="text" id="contactAddress" name="contactAddress" onChange={handleChange} value={values.contactAddress || ''} required />
//                     {errors.contactAddress && (
//                         <p className="is-error">{errors.contactAddress}</p>
//                     )}
//                 </div>
//             </div>
//             <div className='button-wrapper'>
//                 <button onClick={() => handleRemoveContact(id)} className="button remove-contact-btn" >Remove</button>
//             </div>
//         </form>
//     );
// }

// export default ContactForm;

const ContactForm = ({ values, errors, handleChange, handleRemoveContact, id }) => {
    const contactLabel = `contactLabel${id}`;
    const typeConnection = `typeConnection${id}`;
    const contactAddress = `contactAddress${id}`;

    return (
        <form className='contact-form form'>
            <div className='half-field'> {/* <-- find better className  */}
                <div className='field'>
                    <label htmlFor={typeConnection}>Type Of Contact</label>
                    <select id={typeConnection} name={typeConnection} value={values[typeConnection] || 'email'} onChange={handleChange}>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </div>
                <div className='field'>
                    <label htmlFor={contactLabel}>Contact Label</label>
                    <input type="text" id={contactLabel} name={contactLabel} onChange={handleChange} value={values[contactLabel] || ''} required />
                    {errors[contactLabel] && (
                        <p className="is-error">{errors[contactLabel]}</p>
                    )}
                </div>
            </div>
            <div className='half-field'> {/* <-- find better className  */}
                <div className='field'>
                    <label htmlFor={contactAddress}>Email/Phone No.</label>
                    <input type="text" id={contactAddress} name={contactAddress} onChange={handleChange} value={values[contactAddress] || ''} required />
                    {errors[contactAddress] && (
                        <p className="is-error">{errors[contactAddress]}</p>
                    )}
                </div>
            </div>
            <div className='button-wrapper'>
                <button onClick={() => handleRemoveContact(id)} className="button remove-contact-btn" >Remove</button>
            </div>
        </form>
    );
}

export default ContactForm;