import axios from 'axios';
import React, { useState } from 'react';



const GetAllBug = () => {
    //Data fields for input from browser
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
    //Data fields for input from browser
    const [setOneBug] = useState({
        bugId: 0,
        bugName: '',
        raisedDate: '',
        description: '',
        users: {
            userId: 0,
            userName: ''
        }
    });

    /**
 * When admin click get All Bugs Button then submit message data is displayed on console window.
 * Admin can get all projects with the help of URL and object to backend.
 *  If database is empty, admin will able to see the alert message in a pop-up window.
 
  
 
 * @param  url  an absolute URL giving the base location from the database
 * @param  name the location of the projects, relative to the url argument
 * @return      
 * @see         alert messsage
 */




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
            { /* table-hover - table-hover class, a light gray background will be added to rows while the cursor hovers over them.
                   By clicking on submit button, display the bug Table.
                */}
            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Bug"
                        data-testid="submit"
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
                            {/* conditional rendering with oneProject and setOneProject */}
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default GetAllBug;