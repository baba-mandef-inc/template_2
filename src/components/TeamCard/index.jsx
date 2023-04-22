import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";


import './styles.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard   } from 'swiper'

function TeamCard() {
  return (
    <>
      {/*    <!-- Team Start --> */}
      <div className="section team-section section-padding">
        <div className="container">
          {/*  <!-- Team Wrap Start --> */}
          <div className="team-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">Our Professional Staffs </h3>
              <h2 className="title"> We use IT to change your life</h2>
            </div>
            {/*  <!-- Team Content Wrap Start --> */}
            <div className="team-content-wrap">
              <div className="swiper-container team-active">
                <Swiper
                
                

                slidesPerView={3}
           
                  modules={[ Pagination, Mousewheel , Keyboard, Navigation]}

              
                 breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

                  
                  className="mySwiper"
                  cssMode={true}
                  navigation={true}
                  
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                >
                  <SwiperSlide>
                    {/*  <!-- Single Team Start --> */}
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-1.jpg" alt=""></img>
                        </a>
                      </div>
                      <div class="team-content">
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="/#">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 class="name">
                          <a href="/#">Nelson Houngbedji</a>
                        </h3>
                        <span class="designation">Founder, Kreativ.inc</span>
                      </div>
                    </div>
                    {/*    <!-- Single Team End --> */}
                  </SwiperSlide>

                  <SwiperSlide>
                    {/*   <!-- Single Team Start --> */}
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-2.jpg" alt=""></img>
                        </a>
                      </div>
                      <div class="team-content">
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="/#">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 class="name">
                          <a href="/#">Abiodoun Paraiso</a>
                        </h3>
                        <span class="designation">CTO, Kreativ.inc</span>
                      </div>
                    </div>
                    {/*  <!-- Single Team End --> */}
                  </SwiperSlide>

                  <SwiperSlide>
                    {/*   <!-- Single Team Start --> */}
                    <div class="single-team">
                      <div class="team-img">
                        <a href="team.html">
                          <img src="assets/images/team/team-3.jpg" alt=""></img>
                        </a>
                      </div>
                      <div class="team-content">
                        <div class="team-social">
                          <ul class="social">
                            <li>
                              <a href="/#">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-dribbble"></i>
                              </a>
                            </li>
                            <li>
                              <a href="/#">
                                <i class="fab fa-behance"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h3 class="name">
                          <a href="/#">Crispus Fonteclounon</a>
                        </h3>
                        <span class="designation">Artistic director, Kreativ.inc</span>
                      </div>
                    </div>
                    {/* <!-- Single Team End --> */}
                  </SwiperSlide>
                  
                </Swiper>
              </div>
            </div>
            {/*   <!-- Team Content Wrap End --> */}
          </div>
          {/*  <!-- Team Wrap End --> */}
        </div>
      </div>
    </>
  )
}

export default TeamCard
