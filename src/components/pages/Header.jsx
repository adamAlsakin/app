import React from "react";
import { Carousel } from "react-bootstrap";
import img3 from "../../assest/images/img3.jpg";
import img2b from "../../assest/images/img2b.png";
import img1a from "../../assest/images/img1a.jpg"
import img14B from "../../assest/images/img14B.png";
// import img1M from "../../assest/images/img1M.jpg";
import img20 from "../../assest/images/img20.jpg";
import "./Header.css";



const Header = () => {
  return (
    <header>
    <section className="slider">
      <div className="container_slider">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Carousel>
              <Carousel.Item>
                <img src={img14B} alt="pic1" />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img src={img2b} alt="pic2"/>
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
              <img src={img3} alt="pic3" />
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
              <img src={img1a} alt="pic4"/>
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img src={img20} alt="pic5"/>

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>

          </div>

        </div>

      </div>
    </section>
    </header>
  );
}
export default Header;