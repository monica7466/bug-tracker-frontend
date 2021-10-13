import axios from 'axios';
import React from 'react';
import { useState } from 'react';
/**
* When staff adds the message and submit it then submit message data is displayed on console window.
* staff can also post the message with the help of URL and object to backend.
* If projectId  from the database matches, admin will able to see the alert message in a pop-up window as 'Message sent!'
* If projectId  from the database does not matches, admin will able to see the alert message in a pop-up window as 'Please enter valid user ID!'

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the message, relative to the url argument
* @return     
* @see         alert messsage
*/
const AddReport = () => {

    //Data fields for input from front end
    const [report, setReport] = useState({
        project: {
            bugId: 0,
            endDateOfProject: '',
            projectID: 0,
            projectName: '',
            projectPriority: 0,
            staffId: 0,
            startDateOfProject: ''
        },
        reportId: 0,
        solutionDescription: '',
        status: ''

    });

    // Taking current data from  browser
    const handleReportData = level => (evt) => {

        if (!level) {
            console.log("handleReportData", evt.target.name, evt.target.value);
            setReport({
                ...report,
                [evt.target.name]: evt.target.value,


            });
        } else {
            setReport({
                ...report,
                [level]: {
                    ...report[level],
                    [evt.target.name]: evt.target.value
                }
            })
        }
        evt.preventDefault();
    }


    const submitReportData = (evt) => {
        console.log(report);
        axios.post('http://localhost:8082/report/AddProjectReport', report)
            .then((response) => {
                setReport(response.data);
                alert('Report sent successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }



    return (
        <div className="container" >
            <div>

                <h3 >Add Report</h3>
                <hr />
                <form className="form form-group row" onSubmit={submitReportData} >
                    <div>
                        <p>PROJECT ID</p>
                        <input
                            type="number"
                            id="projectID"
                            name="projectID"
                            data-testid="projectID"
                            className="form-control mb-3"
                            value={report.project.projectID}
                            placeholder="Project ID"
                            onChange={handleReportData('project')}
                        />
                        <p>SOLUTION DESCRIPTION</p>
                        <input
                            type="text"
                            id="solutionDescription"
                            name="solutionDescription"
                            data-testid="descriptionSolution"
                            className="form-control mb-3"
                            value={report.solutionDescription}
                            placeholder="solutionDescription"
                            onChange={handleReportData()}
                        />
                        <p>STATUS</p>
                        <input
                            type="text"
                            id="status"
                            data-testid="status"
                            name="status"
                            className="form-control mb-3"
                            // value={report.status}
                            placeholder="status"
                            onChange={handleReportData()}
                        />

                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            data-testid="submit"
                            className="btn btn-primary mb-3"
                            value="Add Report"
                        />
                    </div>
                </form>

            </div>
        </div>
    );
}
export default AddReport;