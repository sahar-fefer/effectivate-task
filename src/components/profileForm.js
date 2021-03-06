const ProfileForm = ({ values, errors, handleChange }) => {
    return (
        <section className='form-box'>
            <header className='form-header'>
                User Profile
            </header>
            <form className='profile-form'>
                <div className='field'>
                    <label htmlFor="userName">Name</label>
                    <input type="text" id="userName" name="userName" onChange={handleChange} value={values.userName || ''} required />
                    {errors.userName && (
                        <p className="is-error">{errors.userName}</p>
                    )}
                </div>
                <div className='field'>
                    <label htmlFor="userOrganization">Organization</label>
                    <input type="text" id="userOrganization" name="userOrganization" onChange={handleChange} value={values.userOrganization || ''} />
                </div>
            </form>
        </section>
    );
}

export default ProfileForm;