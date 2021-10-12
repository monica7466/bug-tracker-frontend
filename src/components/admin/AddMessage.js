import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const AddMessage = (props) => {

    const [empList, setEmpList] = useState([]);
    const [msg, setMsg] = useState({
        messageId: 0,
        messages:'',
        users:0
    });
    const [oneMsg, setOneMsg] = useState({
        messageId: 0,
        messages:'',
        users:0
    });

    const handleMsgData = (evt) => {
        console.log("handleMsgData", evt.target.name, evt.target.value);
        setMsg({
            ...msg,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneMsgData = (evt) => {
        console.log("handleOneMsgData", evt.target.name, evt.target.value);
        setOneMsg({
            ...msg,
            [evt.target.name]: evt.target.value
        });
    }

    const submitAddMsg = (evt) => {
        console.log("submitMsgData");
        axios.post('http://localhost:8082/message/addMessage', msg)
            .then((response) => {
                setOneMsg(response.data);
                alert('Message sent!')
            }).catch(error => {
                console.log(error.message);
                alert('Please enter valid user ID!')
            });
        evt.preventDefault();
    }

   

    return (
        <div className="container" >
            <div>
                <p>Add a Message</p>
                <form className="form form-group row" onSubmit={submitAddMsg} >
                    <div>
                    <input
                            type="number"
                            id="users"
                            name="users"
                            className="form-control mb-3"
                            placeholder="User Id"
                            onChange={handleMsgData}
                        />
                        <input
                            type="text"
                            id="messages"
                            name="messages"
                            className="form-control mb-3"
                            placeholder="messages"
                            onChange={handleMsgData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add messsage"
                        />
                    </div>
                </form>
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
           </div> 
    );
}
export default AddMessage;