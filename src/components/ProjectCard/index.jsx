// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Navigation } from 'swiper'

function ProjectCard() {
  return (
    /*  <!-- Case Study Start --> */
    <div className={'section case-study-section section-padding'} id="projects">
      <div className={'container'}>
        <div className={'case-study-wrap'}>
          <div className={'section-title text-center'}>
            <h3 className={'sub-title'}>Our Projects</h3>
            <h2 className={'title'}>Innovation a Passion</h2>
          </div>
        </div>
      </div>

      <div className="case-study-slider-wrap">
        <div className="swiper-container case-study-active">
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
                      <b><br /> What are you waiting for to join the
                      ship ?</b>
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
                      producer and realisator movies and shows. 
                      <b> <br /> What are you
                      waiting for to chill watching an amazing movie ?
                      </b>
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
                        entirely produced by our team.  This youtube channel offers you a lot of
                        real-life stories worthy of a movie.
                        <b> 
                          <br />
                        What are you waiting for to discover the AnonyMoiVerse ?
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Case Study End --> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
