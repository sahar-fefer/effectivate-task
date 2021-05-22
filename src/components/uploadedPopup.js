const UploadedPopup = ({ values, allContactsId, handleClear }) => {
    return (
        <div className='popup-container'>
            <div className='finish-popup'>
                <header className='popup-header'>
                    Hello {values['userName']}
                    {
                        values['organization'] &&
                        ` from ${values['organization']}`
                    }
                </header>
                <div className='contacts-wrapper'>
                    {
                        allContactsId.map((contactId, i) => (
                            <div className='contact' key={i}>
                                <div>{values[`contactLabel${contactId}`]}</div>
                                <div>{values[`typeConnection${contactId}`]} is: {values[`contactAddress${contactId}`]}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='clear-wrapper'>
                    <button onClick={handleClear} className='button clear'>New Profile</button>
                </div>
            </div>
        </div>
    );
}

export default UploadedPopup;