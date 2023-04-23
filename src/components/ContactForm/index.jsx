function ContactForm(){
    return(
        <div class="section contact-form-section section-padding" id="contact">
        <div class="container">
           {/*  <!-- Contact Wrap Start --> */}
            <div class="contact-wrap">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="form-title text-center">
                       
                            <h2 class="title"> We'd love to hear from you !</h2>
                        </div>
                       {/*  <!-- Contact Form Wrap Start --> */}
                        <div class="contact-form-wrap">
                            <form action="https://thepixelcurve.com/html/techmax/techmax/contact.php" method="post" data-toggle="validator">
                                <div class="row">
                                    <div class="col-md-6">
                                       {/*  <!-- Single Form Start --> */}
                                        <div class="single-form">
                                            <input class="form-control rounded" type="text" placeholder="Your Name"/>
                                        </div>
                                      {/*   <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-6">
                                       {/*  <!-- Single Form Start --> */}
                                        <div class="single-form">
                                            <input class="form-control rounded" type="email" placeholder="Your Email"/>
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-6">
                                        {/* <!-- Single Form Start --> */}
                                        <div class="single-form">
                                            <input class="form-control rounded" type="text" placeholder="Your Number"/>
                                        </div>
                                       {/*  <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-6">
                                        {/* <!-- Single Form Start --> */}
                                        <div class="single-form">
                                            <input class="form-control rounded" type="text" placeholder="Subject"/> 
                                        </div>
                                        {/* <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-12">
                                       {/*  <!-- Single Form Start --> */}
                                        <div class="single-form">
                                            <textarea class="form-control rounded" placeholder="Write A Message"></textarea>
                                        </div>
                                       {/*  <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-12">
                                        {/* <!--  Single Form Start --> */}
                                        <div class="form-btn text-center">
                                            <button class="btn" type="submit">Send Message</button>
                                        </div>
                                       {/*  <!--  Single Form End --> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                       {/*  <!-- Contact Form Wrap End --> */}
                    </div>
                </div>
            </div>
           {/*  <!-- Contact Wrap End --> */}
        </div>
    </div>
    )
}
export default ContactForm