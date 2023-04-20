function AboutCard() {
  return (
    /* <!-- About Start --> */
    <div className={"section about-section-3 about-section-4 section-padding-02"} id="about">
      <div className={"container"}>
        {/* <!-- About Wrap Start --> */}
        <div className={"about-wrap"}>
          <div className={"section-title text-center"}>
            <h3 className={"sub-title"}>Who We Are ?</h3>
            <h2 className={"title"}>We help you to digitise your business</h2>
          </div>
          {/* <!-- About Content Wrap Start --> */}
          <div className={"about-content-wrap"}>
            <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                {/*  <!-- About Thumb Wrap Start --> */}
                <div className={"about-thumb-wrap"}>
                  <div className={"about-thumb-middle"}>
                    <img src={"assets/images/about-1.jpg"} alt="" />
                  </div>
                  <div className={"about-thumb-bottom"}>
                    <img src={"assets/images/about-2.jpg"} alt="" />
                  </div>
                  <div className={"about-thumb-small"}>
                    <img src={"assets/images/about-sm-5.jpg"} alt="" />
                  </div>
                  <div className={"about-thumb-shape"}>
                    <img src="assets/images/ab-shape.png" alt="" />
                  </div>
                </div>
                {/*    <!-- About Thumb Wrap End --> */}
              </div>
              <div className={"col-lg-6"}>
                {/*      <!-- About Content Start --> */}
                <div className={"about-content"}>
                  <h3 className={"title"}>
                    In a world where every day is a new challenge, we provide
                    you with digital solutions that make your life easier.{' '}
                  </h3>
                  <p>
                    We provides you whith an entire remote team of incredible
                    freelance talent for all your software development and
                    content production needs.
                  </p>
                  <div className={"about-author-list"}>
                    <div className={"about-list"}>
                      <ul>
                        <li>
                          <i className={"fas fa-check"}></i>{' '}
                          <a href="u"> We build with our creativity power</a>
                        </li>
                        <li>
                          <i className={"fas fa-check"}></i>{' '}
                          <a href="u">
                            We keep focus on technical excellence and quality
                          </a>
                        </li>
                        {/* <li><i className="fas fa-check"></i> <a href="u"> We’re consultants, guides, and partners for brands</a></li>
                         */}
                      </ul>
                    </div>
                    <div className={"about-author"}>
                      <div className={"author-text"}>
                        <h4 className={"name"}>Nelson Houngbedji</h4>
                        <span className={"designation"}>CEO, Kreativ.inc</span>
                      </div>
                      <div className={"author-sign"}>
                        <img src="assets/images/sign-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  <!-- About Content End --> */}
              </div>
            </div>
          </div>
          {/* <!-- About Content Wrap End --> */}
        </div>
        {/* <!-- About Wrap End --> */}
      </div>
    </div>
  )
}

export default AboutCard
