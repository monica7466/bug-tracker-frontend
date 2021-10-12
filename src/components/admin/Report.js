import React from 'react';
import { useHistory } from 'react-router';


const Report = () => {

    const history = useHistory();

    const viewReport = (event) => {


        history.push('/getAllReport');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "500px"}}>Reports</h3>
                    <div class="card-columns">
                <div class="card" style={{ width: "18rem" }}>
                    <img src="https://bit.ly/3FAqSzF" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Get All Reports</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={viewReport}>GetAll</button>
                    </div>
                </div>
                </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Report;