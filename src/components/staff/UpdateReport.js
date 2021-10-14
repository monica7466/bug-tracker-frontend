import axios from 'axios';
import React from 'react';
import { useState } from 'react';


// Taking current data from  browser
/**
* When staff update the report then updated project will be displayed on console window.
* Staff can also update the project with the help of URL and object to backend.
* If reportId  from the database matches, admin will able to see the alert message in a pop-up window as 'Project updated successfully!'
* If reportId  from the database does not matches, admin will able to see the alert message in a pop-up window as "Project ID does not exist!"



* @param  url  an absolute URL giving the base location from the database
* @param  name the location of thereport, relative to the url argument
* @return      
* @see         alert report
*/





const UpdateReport = () => {

    //Data fields for input from front end
    const [report, setReport] = useState({
        project: {
            bugId: 0,
            endDateOfProject: "",
            projectID: 0,
            projectName: "",
            projectPriority: 0,
            staffId: 0,
            startDateOfProject: ""
        },
        reportId: 0,
        solutionDescription: '',
        status: '',

    });


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
        axios.put(`http://localhost:8082/report/updateReport/${report.projectID}`, report)
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

                <h3 >Update Report</h3>
                <hr />
                <form className="form form-group row" onSubmit={submitReportData} >
                    <div>
                        <p>REPORT ID<abbr title="This field is mandatory" aria-label="required">*</abbr></p>
                        <input
                            type="number"
                            id="reportId"
                            name="reportId"
                            className="form-control mb-3"
                            placeholder="Report ID"
                            data-testid="reportID"
                            onChange={handleReportData()}
                        />
                        <p>PROJECT ID</p>
                        <input
                            type="number"
                            id="projectID"
                            name="projectID"
                            className="form-control mb-3"
                            placeholder="Project ID"
                            data-testid="projectID"
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
                            placeholder="Solution description of project"
                            onChange={handleReportData()}
                        />
                        <p>STATUS</p>
                        <input
                            type="text"
                            id="status"
                            name="status"
                            data-testid="status"
                            className="form-control mb-3"
                            placeholder="status"
                            onChange={handleReportData()}

                        />

                        <input
                            type="submit"
                            id="submit"
                            data-testid="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Report"
                        />
                    </div>
                </form>

            </div>
        </div>
    );
}
export default UpdateReport;