import axios from 'axios';
import React, { useState } from 'react';



const GetAllReport = () => {
    //Data fields for input from browser
    const [setReportList] = useState([]);
    const [report, setReport] = useState({
        reportId: 0,
        solutionDescription: '',
        status: '',
        project: {
            projectID: 0,
            bugId: 0,
            endDateOfProject: '',
            projectName: '',
            projectPriority: 0,
            staffId: 0,
            startDateOfProject: ''
        }
    });
    //Data fields for input from browser
    const [setOneReport] = useState({
        reportId: 0,
        solutionDescription: '',
        status: '',
        project: {
            projectID: 0,
            bugId: 0,
            endDateOfProject: '',
            projectName: '',
            projectPriority: 0,
            staffId: 0,
            startDateOfProject: ''
        }
    });

    // Taking current data from  browser
    const handleReportData = (evt) => {
        console.log("handleReportData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value
        });
    }
    // Taking current data from  browser
    const handleOneReportData = (evt) => {
        console.log("handleOneBugData", evt.target.name, evt.target.value);
        setOneReport({
            ...report,
            [evt.target.name]: evt.target.value
        });
    }


    /**
   * When admin click get All Project Button then submit message data is displayed on console window.
   * Admin can get all projects with the help of URL and object to backend.
   *   If database is empty, admin will able to see the alert message in a pop-up window.
   
    
   
   * @param  url  an absolute URL giving the base location from the database
   * @param  name the location of the projects, relative to the url argument
   * @return      
   * @see         alert messsage
   */

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
            <title>Get All Report</title>
            <h1>View Report Details</h1>
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
                        value="Get All Report"
                        data-testid="submit"
                        onClick={viewReport}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-secondary table-striped">
                        <thead>
                            <tr>

                                <th scope="col">REPORT ID</th>
                                <th scope="col">SOLUTION DESCRIPTION</th>
                                <th scope="col">SRTATUS</th>
                                <th scope="col">PROJECT ID</th>

                            </tr>
                        </thead>
                        <tbody>

                            {bugList.map((r, k) => {
                                console.log(r);
                                return (

                                    <tr k={k}>

                                        <th scope="row">{r.reportId}</th>
                                        <td>{r.solutionDescription}</td>
                                        <td>{r.status}</td>
                                        <td>{r.project.projectID}</td>

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
export default GetAllReport;