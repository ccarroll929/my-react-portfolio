import React from 'react';

export const Contact = () => {
    return (
    <div className='contact' id='contact'>
                <form action='https://getform.io/f/lakmevoa' method='post'>
                    <h2>Send me a message!</h2>
                    <div className='flex flex-col'>
                        <input type='name' name='name' id='name' placeholder='Full Name'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type='email' name='email' id='email' placeholder='Email'/>
                    </div>
                    <div className='flex flex-col'>
                        <input type='message' name='message' id='message' placeholder='Message' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
    )
}
export default Contact;