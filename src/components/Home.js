import React from 'react';
import slide1 from '../Assest/slide1.jpg';
import slide2 from '../Assest/slide2.jpg';
import slide3 from '../Assest/slide4.png';
import slide4 from '../Assest/slide3 (2).jpeg';


const Home = () => {

    return (
        <div className="container">
            <h1 className="display-4 text-primary text-center">Bug Tracker</h1>
            <h4 className="display-4 text-dark text-center">Welcome to the system</h4>
            <div className="border boreder-primary">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-70 car" src={slide1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="car d-block" src={slide2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="car d-block" src={slide3} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="car d-block" src={slide4} alt="Four slide" />
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>
        </div>
        </div>
      
    )
}

export default Home;