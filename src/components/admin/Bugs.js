import React from 'react';
import { useHistory } from 'react-router';

const Bugs = () => {

    
    const history = useHistory();

    const viewBug = (event) => {


        history.push('/getAllBug');

        event.preventDefault();
    }
    const searchBugs = (event) => {


        history.push('/searchBug');

        event.preventDefault();
    }
    console.log("Bugs component");
    return (
        <div>
            <div>
                <div className="row" className="alignment" >
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "500px"}}>Bugs</h3>
                    <div class="card-columns">
                     <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                        <img src="https://bit.ly/3oLC3j4" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">Search Bug</h5>
                        <p class="card-text text-dark">Perform search  bug by using below button.</p>
                        <button type="button" class="btn btn-primary" onClick={searchBugs}>Search</button>
                    </div>
                </div>
                <div class="card" style={{ width: "22rem" }}>
                    <div class="card-body">
                    <img src="https://bit.ly/3FCVb8Y" class="card-img-top" alt="..." />
                        <h5 class="card-title text-dark">Get All Bug</h5>
                        <p class="card-text text-dark">Perform get all  bug by using below button.</p>
                        <button type="button" class="btn btn-primary" onClick={viewBug}>GetAll</button>
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
export default Bugs;