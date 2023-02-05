
import React, { Fragment } from "react";
//import Navs from "../navs/Navs";
import Header from "./Header";
import "./Home.css";
import Roll from "react-reveal/Roll";

 

const Home = () => {
  return (
    <Fragment>
      <div className="hero-container">
      <Roll left>
      <h1>SENS: Construire un meilleur avenir à chacun et à tous</h1>:
      </Roll>
      </div>
      {/* <h3>SENS: Construire un meilleur avenir à chacun et à tous</h3> */}
    {/* <Navs /> */}
      <Header />
      <section>
        <div className="container_body">
          <div className="col-lg-ml-12">
            <Roll left>
            <h2>QUI SOMMES NOUS ?</h2>   
            <p>Notre mission est d'agir et d'innover <br></br>
               en faveur de la mobilité sociale,<br></br>
              économique et professionnelle.</p>
              </Roll>
          </div>
          <div className="col-md-6">
           <h4>sdfghjklm</h4>

          </div>
        </div>

      </section>
    </Fragment>

  );
}
export default Home;