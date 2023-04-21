function Footer(){

    return(
        <div>
        <div class="section footer-section" style={{backgroundImage: `url(/assets/images/bg/footer-bg.jpg)`}}>

            <div class="container">
                <div class="footer-widget-wrap">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widget-about">
                                <a class="footer-logo" href="index-2.html"><img src="/assets/images/logo-white.png" alt="Logo"/></a>
                                <div class="widget-info">
                                    <ul>
                                        <li>
                                            <div class="info-icon">
                                                <i class="flaticon-phone-call"></i>
                                            </div>
                                            <div class="info-text">
                                                <span><a href="d">+91 458 654 528</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="info-icon">
                                                <i class="far fa-envelope-open"></i>
                                            </div>
                                            <div class="info-text">
                                                <span><a href="d">info@example.com</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="info-icon">
                                                <i class="flaticon-pin"></i>
                                            </div>
                                            <div class="info-text">
                                                <span>60 East 65th Street, NY</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Useful Links</h4>

                                <div class="widget-link">
                                    <ul class="link">
                                        <li><a href="s">Terms & Conditions</a></li>
                                        <li><a href="s">About Company</a></li>
                                        <li><a href="s">Payment Gatway</a></li>
                                        <li><a href="d">Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Our Services</h4>

                                <div class="widget-link">
                                    <ul class="link">
                                        <li><a href="s">Data Security</a></li>
                                        <li><a href="f">IT Managment</a></li>
                                        <li><a href="f">Outsourcing</a></li>
                                        <li><a href="f">Networking</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Support</h4>

                                <div class="widget-link">
                                    <ul class="link">
                                        <li><a href="d">Documentation</a></li>
                                        <li><a href="d">Support</a></li>
                                        <li><a href="s">FAQS</a></li>
                                        <li><a href="d">Download</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-copyright-area">
                <div class="container">
                    <div class="footer-copyright-wrap">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6">
                                <div class="copyright-text">
                                    <p>© Copyrights 2022 Techmax All rights reserved. </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="copyright-social">
                                    <ul class="social">
                                        <li><a href="j"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="d"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="d"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="progress-wrap active-progress">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: "stroke-dashoffset 10ms linear 0s", strokeDasharray: '307.919px, 307.919px', strokeDashoffset: '162.499px'}}></path>
            </svg>
        </div>
        </div>
    );

}

export default Footer
