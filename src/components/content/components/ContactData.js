import React from 'react';

import useFetch from '../../../hooks/useFetch';


import './ContactData.css';

const ContactData = () => {

    let email,phone,mailto = '';

    const { data, loading = true } = useFetch('https://backend-curriculum-ronco.herokuapp.com/contact');
    if( data ){
        console.log(data[0]);
        email = data[0].email;
        phone = data[0].cel;
        mailto = `mailto:${email}`;
    }
    return (
        <>
            {loading &&
                <div>
                    <p>Loading...</p>
                </div>
            }
            {!loading &&
                <div className="contact-data">
                    <div className="contact-row">
                        <h3>Email:</h3>
                        <p><a href={mailto}>{ email }</a></p>
                    </div>
                    <hr />
                    <div className="contact-row">
                        <h3>Telefono:</h3>
                        <p>{ phone }</p>
                    </div>
                </div>
            }
        </>
    )
}

export default ContactData;
