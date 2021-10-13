import axios from 'axios';
import React, { useState, useEffect } from 'react';

const GetMyMessages = () => {

    const [msgList, setmsgList] = useState([]);
    const [msg, setmsg] = useState({

        messageId : 0,
        messages:'',
        users:{
            userId:0,
            userName:''
        }

    });


    const handleMessageData = (evt) => {

        console.log("handleProjectData", evt.target.name, evt.target.value);
        setmsg({
            ...msg,
            [evt.target.name]: evt.target.value,
        });

        evt.preventDefault();
    }


    const myMessage = (evt) => {
        console.log(msg.userId);
        axios.get(`http://localhost:8082/message/getMessage/${msg.userId}`)
            .then((response) => {
                setmsgList(response.data);
                console.log(msgList)
            }).catch(error => {
                alert("User ID does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>View Messages</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >View Messages</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={myMessage} >
                        <div>
                            <p>User Id</p>
                            <input
                                type="number"
                                id="userId"
                                name="userId"
                                className="form-control mb-3"
                                // value={users.userId}
                                placeholder="Enter Id"
                                onChange={handleMessageData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="View Messages"
                            />
                        </div>
                    </form>
                    <table class="table table-hover table-secondary table-stripped">
                        <thead>
                            <tr>
                                <th scope="col">MESSAGE</th>
                                <th scope="col">USER ID</th>

                            </tr>
                        </thead>
                        <tbody>
                           
                                {msgList.map((r, k) => {
                                    console.log(r);
                                    return (

                                        <tr k={k}>

                                            <th scope="row">{r.messages}</th>
                                            <td>{r.users.userId}</td>
                                        
                                        </tr>
                                    )
                                })}
                            
                        </tbody>
                    </table>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default GetMyMessages;