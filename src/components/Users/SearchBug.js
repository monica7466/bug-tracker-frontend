import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Taking current data from  browser
/**
* When user search the bug then SearchBug will be displayed on console window.
* Staff can also search the staff with the help of URL and object to backend.
* If bugId from the database matches, user will able to see the alert message in a pop-up window
* If bugId from the database does not matches, user will able to see the alert message in a pop-up window
 
* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the bug, relative to the url argument
* @return      
* @see         alert message
*/
const SearchBug = () => {

    const [bugList, setBugList] = useState([]);
    const [bug, setBug] = useState({

        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users: {
            userId: 0,
            userName: ''
        }

    });


    const handleBugData = (evt) => {

        console.log("handleBugData", evt.target.name, evt.target.value);
        setBug({
            ...bug,
            [evt.target.name]: evt.target.value,
        });

        evt.preventDefault();
    }


    const searchBugs = (evt) => {
        console.log("searchBugs");
        axios.get(`http://localhost:8082/Bug/searchBug${bug.bugId}`)
            .then((response) => {
                setBug(response.data);
            }).catch(error => {
                alert("Bug ID does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Search Bug</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Search Bug</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={searchBugs} >
                        <div>
                            <p>Bug Id</p>
                            <input
                                type="number"
                                id="bugId"
                                name="bugId"
                                data-testid="bugId"
                                className="form-control mb-3"
                                value={bug.bugId}
                                placeholder="Enter Id"
                                onChange={handleBugData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                data-testid="submit"
                                className="btn btn-primary mb-3"
                                value="Get Bug Details"
                            />
                        </div>
                    </form>
                    <table class="table table-hover table-secondary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Bug ID</th>
                                <th scope="col">Bug Name</th>
                                <th scope="col">Raised Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">User ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <th scope="row">{bug.bugId}</th>
                                <td>{bug.bugName}</td>
                                <td>{bug.raisedDate}</td>
                                <td>{bug.description}</td>
                                <td>{bug.users.userId}</td>

                            </tr>
                        </tbody>
                    </table>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default SearchBug;