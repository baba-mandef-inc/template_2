function Header(){

    return (
      
       <div>
         <div id="header" class="section header-section transparent-header">
            <div class="container">

            
                <div class="header-wrap">

                    <div class="header-logo">
                        <a href="/"><img src="assets/images/logo.png" alt=""/></a>
                    </div>

                    <div class="header-menu d-none d-lg-block">
                        <ul class="main-menu">
                            <li class="active-menu">
                                <a href="/">Home</a>
                                
                            </li>
                            <li>
                                <a href="/#about">About Us</a>
                            </li>
                           
                            <li><a href="#">Blog</a>
                                <ul class="sub-menu">
                                    <li><a href="blog.html">Blog Grid</a></li>
                                    <li><a href="blog-standard.html">Latest News</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                   
                    <div className={"header-meta"}>
                        <div className={"header-info d-none d-md-flex"}>
                            <div className={"info-icon"}>
                                <i className={"fas fa-phone-alt"}></i>
                            </div>
                            <div class="info-text">
                                <span>Free Consultant</span>
                                <span class="number"><a href="#">+36 55 540 069</a></span>
                            </div>
                        </div>
                     


                        <div className={"header-search"}>
                            <a className={"search-btn"} href="#"><i className={"flaticon-loupe"}></i></a>
                            <div className={"search-wrap"}>
                                <div className={"search-inner"}>
                                    <i id="search-close" class={"flaticon-close search-close"}></i>
                                    <div className={"search-cell"}>
                                        <form action="#">
                                            <div className={"search-field-holder"}>
                                                <input className={"main-search-input"} type="search" placeholder="Search Your Keyword..."/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                    
                        <div className="header-cart dropdown">
                            <button class="cart-btn" data-bs-toggle="dropdown">
                                <i class="flaticon-shopping-cart"></i>
                                <span class="count">0</span>
                            </button>

                            <div class="dropdown-menu dropdown-cart">
                         
                                <div class="cart-items">

                                    <div class="single-cart-item">
                                        <div class="item-image">
                                            <img src="assets/images/shop-cart-1.jpg" alt="cart"/>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="title"><a href="#">Apple Iphone X</a></h4>
                                            <span class="quantity">2 x $59.99</span>
                                        </div>
                                        <button class="btn-close"></button>
                                    </div>

                                    <div class="single-cart-item">
                                        <div class="item-image">
                                            <img src="assets/images/shop-cart-2.jpg" alt="cart"/>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="title"><a href="#">Sony Xperia Tablet</a></h4>
                                            <span class="quantity">2 x $59.99</span>
                                        </div>
                                        <button class="btn-close"></button>
                                    </div>
                                 
                                    <div class="single-cart-item">
                                        <div class="item-image">
                                            <img src="assets/images/shop-cart-3.jpg" alt="cart"/>
                                        </div>
                                        <div class="item-content">
                                            <h4 class="title"><a href="#">Camera Digital</a></h4>
                                            <span class="quantity">2 x $59.99</span>
                                        </div>
                                        <button class="btn-close"></button>
                                    </div>

                                </div>
                               

                                <div class="cart-total">
                                    <span class="label">Subtotal:</span>
                                    <span class="value">0</span>
                                </div>

                                <div class="cart-btns">
                                    <a class="btn" href="#">View Cart</a>
                                    <a class="btn btn-2" href="#">Checkout</a>
                                </div>

                            </div>

                        </div>

                        <div class="header-toggle d-lg-none">
                            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>

                </div>

            </div>
        </div>
        </div>
        

<div class="offcanvas offcanvas-start" id="offcanvasExample">
<div class="offcanvas-header">
    <div class="offcanvas-logo">
        <a href="index-2.html"><img src="assets/images/logo-white.png" alt=""/></a>
    </div>
    <button type="button" class="close-btn" data-bs-dismiss="offcanvas"><i class="flaticon-close"></i></button>
</div>

<div class="offcanvas-body">
    <div class="offcanvas-menu">
        <ul class="main-menu">
            <li class="active-menu">
                <a href="index-2.html">Home</a>
                <ul class="sub-menu">
                    <li class="active"><a href="index-2.html">Home One</a></li>
                    <li><a href="index-3.html">Home Two</a></li>
                    <li><a href="index-4.html">Home Three</a></li>
                    <li><a href="index-5.html">Home Four</a></li>
                    <li><a href="index-6.html">Home Five</a></li>
                    <li><a href="index-7.html">Home Six</a></li>
                </ul>
            </li>
            <li>
                <a href="about.html">Aboute Us</a>
            </li>
            <li><a href="#">Pages</a>
                <ul class="sub-menu">
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="service.html">Service</a></li>
                    <li><a href="why-choose.html">Why Choose Us</a></li>
                    <li><a href="testimonial.html">Testimonial</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="login-register.html">Login & Register</a></li>
                </ul>
            </li>
            <li><a href="#">Blog</a>
                <ul class="sub-menu">
                    <li><a href="blog.html">Blog Grid</a></li>
                    <li><a href="blog-standard.html">Latest News</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</div>

</div>
       </div>
       
    );

}
export default Header;