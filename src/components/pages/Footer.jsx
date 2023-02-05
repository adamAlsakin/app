import React from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     MDBFooter,
//     MDBContainer,
//     MDBCol,
//     MDBRow,
//     MDBIcon
//   } from 'mdb-react-ui-kit';

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        //      <MDBFooter className='bg-dark text-center text-white'>
        //   <MDBContainer className='p-4 pb-0'>
        //     <section className='mb-4'>
        //       <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
        //         <MDBIcon fab icon='fFiFacebook' />


        //       </a>

        //       <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
        //         <MDBIcon fab icon='twitter' />
        //       </a>

        //       <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
        //         <MDBIcon fab icon='google' />
        //       </a>
        //       <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
        //         <MDBIcon fab icon='instagram' />
        //       </a>

        //       <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
        //         <MDBIcon fab icon='linkedin-in' />
        //       </a>

        //       <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
        //         <MDBIcon fab icon='github' />
        //       </a>
        //     </section>
        //   </MDBContainer>

        //   <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        //     © 2020 Copyright:
        //     <a className='text-white' href='https://mdbootstrap.com/'>
        //       MDBootstrap.com
        //     </a>
        //   </div>
        // </MDBFooter>// <
        <div className="container-Footer" >
            <section class="social-media" >
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to='/' className="social-logo">
                            LE_MOMENT
                            <i class='fab fa-typo3' />

                        </Link>

                    </div>
                    <small class='website-rights'>LE_MOMENT © 2022</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/https://www.facebook.com/groups/121595492619380'
                            // target='_blank'
                            // aria-label='Facebook'
                        >
                           <i class="bi bi-123"></i>
                        </Link>



                    </div>

                </div>


            </section>
        </div >

    );
}
export default Footer