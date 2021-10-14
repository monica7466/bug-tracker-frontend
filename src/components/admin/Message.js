import React from 'react';
import { useHistory } from 'react-router';
import AdminDashboard from './AdminDashboard';
 
const Message = () => {
    const history = useHistory();

    const submitAddMsg = (event) => {


        history.push('/addMessage');

        event.preventDefault();
    }
    return (
        <div>
            <div>
                {/* <div className="row"></div> */}
                <div className="row" className="alignment">
                    <div className="col-sm-2"></div>
                    <div className="ref">
                    <h3 style={{color: "blue", marginTop: "30px", marginRight: "500px"}}>Messages</h3>
                    <div class="card-columns">
                <div class="card" style={{ width: "22rem" }}>
                    <img src="https://bit.ly/30hy0Rp" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Add Message</h5>
                        <p class="card-text text-dark">Perform add message by using below button.</p>
                        <button type="button" class="btn btn-primary" onClick={submitAddMsg} >Add</button>
                    </div>
                </div>
                </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Message;