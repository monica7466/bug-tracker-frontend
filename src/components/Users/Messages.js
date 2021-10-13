import React from 'react';
import { useHistory } from 'react-router';

const Messages = () => {
    
    const history = useHistory();
    const GetMyMessages = (event) => {


        history.push('/getMessages');

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
                        <h5 class="card-title text-dark">Get Messages</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" onClick={GetMyMessages}>Get</button>
                    </div>
                </div>
                <div class="card-columns">
                <div class="card" style={{ width: "22rem" }}>
                    <img src="https://bit.ly/3oV6qUa" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-dark">Delete Message</h5>
                        <p class="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <button type="button" class="btn btn-primary" >Delete</button>
                    </div>
                </div>
                </div>
                </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default Messages;