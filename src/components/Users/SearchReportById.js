import axios from 'axios';
import React, { useState, useEffect } from 'react';
/**
* When user search the report by Id then SearchReport will be displayed on console window.
* User can also search the staff with the help of URL and object to backend.
* If projectId  from the database matches, staff will able to see the alert message in a pop-up window
* If projectId  from the database does not matches, admin will able to see the alert message in a pop-up window
 
* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the report, relative to the url argument
* @return      
* @see         alert message
*/
const SearchReportById = () => {

    const [reportList] = useState([]);
    const [report, setReport] = useState({

        reportId: 0,
        solutionDescription: '',
        status: '',
        projectId: 0

    });


    const handleReporttData = (evt) => {

        console.log("handleReporttData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value,
        });

        evt.preventDefault();
    }

    const SearchReports = (evt) => {
        console.log("SearchReport");
        axios.get(`http://localhost:8082/Report/searchReportByProjectID${report.projectId}`)
            .then((response) => {
                setReport(response.data);
            }).catch(error => {
                alert("Project ID does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Get Report By ID</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Get Report By ID</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={SearchReports} >
                        <div>
                            <p>REPORT ID</p>
                            <input
                                type="number"
                                id="projectId"
                                name="projectId"
                                data-testid="projectId"
                                className="form-control mb-3"
                                value={report.projectId}
                                placeholder="Enter Id"
                                onChange={handleReporttData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                data-testid="submit"
                                className="btn btn-primary mb-3"
                                value="Get Project Details"
                            />
                        </div>
                    </form>
                </div>
                <table class="table table-hover table-secondary table-striped ml-auto mr-auto">
                    <thead>
                        <tr>
                            <th scope="col">PROJECT ID</th>
                            <th scope="col">SOLUTION DESCRIPTION</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">PROJECT ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <th scope="row">{report.reportId}</th>
                            <td>{report.solutionDescription}</td>
                            <td>{report.status}</td>
                            <td>{report.projectId}</td>

                        </tr>
                    </tbody>
                </table>

                <p><br /><br /></p>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default SearchReportById;