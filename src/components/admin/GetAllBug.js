import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllBug = (props) => {

    const [bugList, setBugList] = useState([]);
    const [bug, setBug] = useState({
        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users:{
            userId:0,
            userName:''
        }
    });
    const [oneBug, setOneBug] = useState({
        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users:{
            userId:0,
            userName:''
        }
    });


    const handleBugData = (evt) => {
        console.log("handleBugData", evt.target.name, evt.target.value);
        setBug({
            ...bug,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneBugData = (evt) => {
        console.log("handleOneBugData", evt.target.name, evt.target.value);
        setOneBug({
            ...bug,
            [evt.target.name]: evt.target.value
        });
    }




    const viewBug = (evt) => {
        axios.get('http://localhost:8082/bug/getAllbugs')
            .then((response) => {
                setBugList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Bug List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Bug</title>
            <h1>View Bug Details</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Bug"
                        onClick={viewBug}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover  table-light table-striped">
                        <thead>
                            <tr>
                                <th scope="col">BUG ID</th>
                                <th scope="col">BUG Name</th>
                                <th scope="col">RAISED DATE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">USERS</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                                {bugList.map((b, k) => {
                                    console.log(b);
                                    return (

                                        <tr k={k}>

                                            <th scope="row">{b.bugId}</th>
                                            <td>{b.bugName}</td>
                                            <td>{b.raisedDate}</td>
                                            <td>{b.description}</td>
                                            <td>{b.users.userId}</td>

                                            </tr>

                                    )
                                })}
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default GetAllBug;