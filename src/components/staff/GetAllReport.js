import axios from 'axios';
import React, { useState } from 'react';

/**
* When staff click get All Reports Button then submit message data is displayed on console window.
* Staff can get all reports with the help of URL and object to backend.
*   If database is empty, admin will able to see the alert message in a pop-up window.

 

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the reports, relative to the url argument
* @return      
* @see         alert messsage
*/

const GetAllReport = () => {

    const [reportList, setReportList] = useState([]);
    const [report, setReport] = useState({
        reportId: 0,
        solutionDescription: '',
        status: '',
        project: {
            projectID: 0,
            projectName: '',
            bugId: 0,
            startDateOfProject: '',
            endDateOfProject: '',
            staffId: 0,
            projectPriority: 0
        }

    });

    const viewReport = (evt) => {
        axios.get('http://localhost:8082/Report/getAllReports')
            .then((response) => {
                setReportList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Report List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >

            <title>Get All Reports</title>
            <h1>View Report Details</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        data-testid="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Project"
                        onClick={viewReport}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-secondary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">REPORT ID</th>
                                <th scope="col">SOLUTION DESCRIPTION</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">PROJECT ID</th>

                            </tr>
                        </thead>
                        <tbody>

                            {reportList.map((r, k) => {
                                console.log(r);
                                return (

                                    <tr kh={k}>

                                        <td scope="row">{r.reportId}</td>
                                        <td>{r.solutionDescription}</td>
                                        <td>{r.status}</td>
                                        <td>{r.project.projectID}</td>
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
export default GetAllReport;