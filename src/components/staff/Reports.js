import React from 'react';
import { useHistory } from 'react-router';


const Reports = () => {

    const history = useHistory();
    const submitReportData = (event) => {


        history.push('/addReport');

        event.preventDefault();
    }
    const deleteReport = (event) => {


        history.push('/deleteReport');

        event.preventDefault();
    }
    const viewReport = (event) => {


        history.push('/getAllReport');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment1">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "150px"}}>Reports</h3>
                    <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3FAqSzF" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Add Reports</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={submitReportData}>Add</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3BvXtnR" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Update Reports</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" >Update</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3ltsNxN" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Search Reports</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" >Search</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3oV6qUa" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Delete Reports</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={deleteReport}>Delete</button>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3ByVcrR" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Get all Reports</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" class="btn btn-primary" onClick={viewReport}>GetAll</button>
                    </div>
                </div>
            </div>
            <p><br/><br/></p>
                    </div>


                </div>

            </div>
                    </div>


                
    )
}
export default Reports;