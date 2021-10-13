
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
/**
* When user update the bug then updated staff will be displayed on console window.
* user can also update the staff with the help of URL and object to backend.
* If bugId  from the database matches, admin will able to see the alert message in a pop-up window as 'bug updated successfully!'
* If bugId  from the database does not matches, admin will able to see the alert message in a pop-up window as "bug ID does not exist!"

 


* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the bug, relative to the url argument
* @return      
* @see         alert bug
*/
const UpdateBug = (props) => {

    const [bugList, setBugList] = useState([]);
    const [bug, setBug] = useState({
        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users: 0
    });
    const [oneBug, setOneBug] = useState({
        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users: 0
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

    const submitUpdateBugs = (evt) => {
        console.log("submitBugData");
        axios.post('http://localhost:8082/bug/addBug', bug)
            .then((response) => {
                setOneBug(response.data);
                alert('Bug sent successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }



    return (
        <div className="container" >
            <div>
                <p>Update a Bug</p>
                <form className="form form-group row" onSubmit={submitUpdateBugs} >
                    <div>
                        <input
                            type="number"
                            id="bugId"
                            name="bugId"
                            className="form-control mb-3"
                            placeholder="bug Id"
                            data-testid="bugId"
                            onChange={handleBugData}
                        />
                        <input
                            type="text"
                            id="bugName"
                            name="bugName"
                            data-testid="bugName"
                            className="form-control mb-3"
                            placeholder="bug Name"
                            onChange={handleBugData}
                        />
                        <input
                            type="date"
                            id="raisedDate"
                            name="raisedDate"
                            data-testid="raisedDate"
                            className="form-control mb-3"
                            placeholder="raised Date"
                            onChange={handleBugData}
                        />
                        <input
                            type="text"
                            id="description"
                            name="description"
                            data-testid="description"
                            className="form-control mb-3"
                            placeholder="description"
                            onChange={handleBugData}
                        />
                        <input
                            type="number"
                            id="users"
                            name="users"
                            data-testid="users"
                            className="form-control mb-3"
                            placeholder="User Id"
                            onChange={handleBugData}
                        />


                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit"
                            className="btn btn-primary mb-3"
                            value="Update Bug"
                        />
                    </div>
                </form>
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
        </div>
    );
}
export default UpdateBug;
