import axios from 'axios';
import React from 'react';
import { useState } from 'react';



const AddMessage = () => {



    //Data fields for input from browser
    const [msg, setMsg] = useState({
        messageId: 0,
        messages: '',
        users: 0
    });



    //Data fields for input from browser
    const [setOneMsg] = useState({
        messageId: 0,
        messages: '',
        users: 0
    });



    // Taking current data from  browser
    const handleMsgData = (evt) => {
        console.log("handleMsgData", evt.target.name, evt.target.value);
        setMsg({
            ...msg,
            [evt.target.name]: evt.target.value
        });
    }



    // Taking current data from  browser
    const handleOneMsgData = (evt) => {
        console.log("handleOneMsgData", evt.target.name, evt.target.value);
        setOneMsg({
            ...msg,
            [evt.target.name]: evt.target.value
        });
    }




    /**
* When admin adds the message and submit it then submit message data is displayed on console window.
* Admin can also post the message with the help of URL and object to backend.
* If userId  from the database matches, admin will able to see the alert message in a pop-up window as 'Message sent!'
* If userId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Please enter valid user ID!'

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return      
* @see         alert messsage
*/



    const submitAddMsg = (evt) => {
        console.log("submitMsgData");
        axios.post('http://localhost:8082/message/addMessage', msg)
            .then((response) => {
                setMsg(response.data);
                alert('Message sent!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter correct details')

            });
        evt.preventDefault();
    }




    return (
        <div className="container" >
            
                <h4>Send Message</h4>
                <hr></hr>

                { /* form-group row - It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging.
                   By clicking on submit button, submitAddMsg is called.
                */}
                <form className="form form-group row" onSubmit={submitAddMsg} >
                    <div>
                        <h6> User ID </h6>
                        {/* Taking user ID from browser */}
                        <input
                            type="number"
                            id="users"
                            name="users"
                            data-testid="users"
                            className="form-control mb-3"
                            placeholder="Enter User Id"
                            onChange={handleMsgData}
                        />



                        {/* Taking message from browser */}
                        <h6> Message </h6>
                        <input
                            type="text"
                            id="messages"
                            name="messages"
                            data-testid="messages"
                            className="form-control mb-3"
                            placeholder=" Add Message"
                            onChange={handleMsgData}
                        />

                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit"
                            className="btn btn-primary mb-3"
                            value="Send"
                        />
                    </div>
                </form>

                {/* conditional rendering with OneMsg and setOneMsg */}

            
        </div>
    );
}
export default AddMessage;