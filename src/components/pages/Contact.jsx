import React, { Component } from 'react'
import "./Contact.css"
export class Contact extends Component {
    render() {
        return (
            <div>

                <section class="mb-4">


                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contactez-nous</h2>
                    {/* <!--Section description--> */}
                    <p class="text-center w-responsive mx-auto mb-5">Avez-vous des questions? N'hésitez pas à nous contacter directement. Notre équipe reviendra vers vous dans
                        une question d'heures pour vous aider.</p>

                    <div class="row">

                        {/* <!--Grid column--> */}
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                {/* <!--Grid row--> */}
                                <div class="row">

                                    {/* <!--Grid column--> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <label for="name" class="">NOM/ PRENOM</label>
                                            <input type="text" id="name" name="name" class="form-control" />

                                        </div>
                                    </div>


                                    {/* <!--Grid column--> */}

                                    {/* <!--Grid column--> */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <label for="email" class="">EMAIL</label>
                                            <input type="text" id="email" name="email" class="form-control" />

                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}

                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <label for="subject" class="">SUJET</label>
                                            <input type="text" id="subject" name="subject" class="form-control" />

                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                                {/* <!--Grid row--> */}
                                <div class="row">

                                    {/* <!--Grid column--> */}
                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <label for="message">MESSAGE</label>
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>

                                        </div>

                                    </div>
                                </div>
                                {/* <!--Grid row--> */}

                            </form>

                            <div class="text-center text-md-left">
                                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Envoyer</a>
                            </div>
                            <div class="status"></div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>60 rue paul kimpe 59260 Hellemmes</p>
                                </li>
                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@le-moment.org</p>
                                </li>
                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+33788877673</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </section>

            </div>
        )
    }
}

export default Contact