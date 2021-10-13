import axios from 'axios';
import React, { useState } from 'react';

const UpdateReport = () => {

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



    const handleReportData = (evt) => {

        console.log("handleReportData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value,

        });

        evt.preventDefault();
    }

    const updateReportDetails = (evt) => {

        axios.put(`http://localhost:8082/report/updateReport/${report.project.projectID}`)
            .then((response) => {
                console.log(response);
                setReport(response.data);
                alert(`Report updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title > Update Report Details </title>
            <div class="card"
                style={
                    {
                        width: "18rem"
                    }
                }
                className="container" >

                <div class="card-body" >
                    <h3 > Update Report </h3>
                    <hr />
                    <form className="form form-group row container"
                        onSubmit={
                            updateReportDetails
                        } >
                        <div>
                            <p> REPORT ID </p>
                            <  input type="number"
                                id="reportId"
                                name="reportId"
                                className="form-control mb-3"
                                placeholder="Enter Id"
                                onChange={handleReportData}
                            />
                            <p > STATUS </p>
                            <   input type="text"
                                id="status"
                                name="status"
                                className="form-control mb-3"
                                placeholder="Enter Status"
                                onChange={handleReportData}
                            />
                            <p > DESCRIPTION </p>
                            <    input type="text"
                                id="solutionDescription"
                                name="solutionDescription"
                                className="form-control mb-3"
                                placeholder="Enter Description"
                                onChange={handleReportData}
                            />
                            <p> PROJECT ID </p>
                            <    input type="number"
                                id="projectID"
                                name="projectID"
                                className="form-control mb-3"
                                placeholder="Enter Id"
                                onChange={handleReportData}
                            />

                            <input type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Update Report" />
                        </div>
                    </form>

                </div>
            </div>
            <p> < br /> < br /> </p>
        </div>
    );
}

export default UpdateReport;