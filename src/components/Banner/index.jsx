function Banner() {
  return (
    <div>
      <div
        className={'section tech-hero-section'}
        style={{ backgroundImage: `url(assets/images/dev2.jpg)` }}
      >
        <div className={'shape-1'}></div>
        {/*   <div className={'shape-2'}></div>
          <div className={'shape-3'}></div>
          <div className={'shape-4'}></div>
          <div className={'shape-5'}></div> */}
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xl-6'}>
              <div className={'hero-content'}>
                <h3
                  className="sub-title"
                  data-aos-delay="600"
                  data-aos="fade-up"
                >
                  Kreativ.inc
                </h3>
                <h3 className={'title'} data-aos="fade-up" data-aos-delay="700">
                  We build the world with creativity
                </h3>
                <p data-aos="fade-up" data-aos-delay="800">
                  Ergonomic, robust and scalable apps to solve people everyday
                  issues.
                </p>
                <div
                  className={'hero-btn'}
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <a className={'btn'} href="/#about">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
