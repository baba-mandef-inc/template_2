import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Navigation } from 'swiper'

function TeamCard(){
    return(
        <>

<Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper swiper-wrapper"
          >
            <SwiperSlide>
              <div
                className={'single-case-study text-center'}
                style={{ backgroundImage: 'url(assets/images/lp.jpg)' }}
              >
                <div className={'case-study-content'}>
                  <div className={'case-study-title'}>
                    <h3 className={'title'}>Let's Play</h3>
                    <span> E-Sport social an beting App</span>
                  </div>
                  <div className={'case-study-text'}>
                    <p>
                      Let's Play is an amazing app for esport an gaming fans.
                      This app helps you to interact with your favorites gamers
                      and your gaming friends around the world. Chatting, News
                      Feed, Virtual Esport Stadium, and Beting are this app main features.
                       What are you waiting for to join the
                      ship ?
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                class={'single-case-study text-center'}
                style={{ backgroundImage: 'url(assets/images/ea.png)' }}
              >
                <div className={'case-study-content'}>
                  <div className={'case-study-title'}>
                    <h3 className={'title'}>Ely Art</h3>
                    <span>Movies Streaming App</span>
                  </div>
                  <div className={'case-study-text'}>
                    <p>
                      Ely art it's a mobile movies streaming application. This
                      app provide you with a huge collection of african content
                      producer and realisator movies and shows. What are you
                      waiting for to chill in front on an amazing movie ?
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={'swiper-slide'}>
                {/* <!-- Single Case Study Start --> */}
                <div
                  className={'single-case-study text-center'}
                  style={{ backgroundImage: 'url(assets/images/sam.png)' }}
                >
                  <div className={'case-study-content'}>
                    <div className={'case-study-title'}>
                      <h3 className={'title'}>SousAnonyMoi</h3>
                      <span>Youtube channel content Production</span>
                    </div>
                    <div className={'case-study-text'}>
                      <p>
                        SousAnonyMoi is a youtube channel whose content is
                        entirely produced by our team. What are you waiting for
                        to join this youtube channel that offers you anonymous
                        real life situations that are worthy of a movie?
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Case Study End --> */}
              </div>
            </SwiperSlide>
          </Swiper>

                 {/*    <!-- Team Start --> */}
        <div class="section team-section section-padding">
            <div class="container">
               {/*  <!-- Team Wrap Start --> */}
                <div class="team-wrap">
                    <div class="section-title text-center">
                        <h3 class="sub-title">Our Professional Staffs </h3>
                        <h2 class="title"> We use IT to change your life</h2>
                    </div>
                   {/*  <!-- Team Content Wrap Start --> */}
                    <div class="team-content-wrap">
                        <div class="swiper-container team-active">
                          
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                   {/*  <!-- Single Team Start --> */}
                                    <div class="single-team">
                                        <div class="team-img">
                                            <a href="team.html"><img src="assets/images/team/team-1.jpg" alt=""></img></a>
                                        </div>
                                        <div class="team-content">
                                            <div class="team-social">
                                                <ul class="social">
                                                    <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-dribbble"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                            <h3 class="name"><a href="/#">Mike Holder</a></h3>
                                            <span class="designation">Founder, Techmax</span>
                                        </div>
                                    </div>
                                 {/*    <!-- Single Team End --> */}
                                </div>


                                
                                <div class="swiper-slide">
                                  {/*   <!-- Single Team Start --> */}
                                    <div class="single-team">
                                        <div class="team-img">
                                            <a href="team.html"><img src="assets/images/team/team-2.jpg" alt=""></img></a>
                                        </div>
                                        <div class="team-content">
                                            <div class="team-social">
                                                <ul class="social">
                                                    <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-dribbble"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                            <h3 class="name"><a href="/#">Mike Holder</a></h3>
                                            <span class="designation">Founder, Techmax</span>
                                        </div>
                                    </div>
                                   {/*  <!-- Single Team End --> */}
                                </div>
                                <div class="swiper-slide">
                                  {/*   <!-- Single Team Start --> */}
                                    <div class="single-team">
                                        <div class="team-img">
                                            <a href="team.html"><img src="assets/images/team/team-3.jpg" alt=""></img></a>
                                        </div>
                                        <div class="team-content">
                                            <div class="team-social">
                                                <ul class="social">
                                                    <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-dribbble"></i></a></li>
                                                    <li><a href="/#"><i class="fab fa-behance"></i></a></li>
                                                </ul>
                                            </div>
                                            <h3 class="name"><a href="/#">Mike Holder</a></h3>
                                            <span class="designation">Founder, Techmax</span>
                                        </div>
                                    </div>
                                    {/* <!-- Single Team End --> */}
                                </div>
                            </div>

                          {/*   <!-- Add Pagination --> */}
                            <div class="swiper-pagination"></div>
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