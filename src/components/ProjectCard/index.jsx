function ProjectCard(){

    return (
       /*  <!-- Case Study Start --> */
        <div className={"section case-study-section section-padding"}>
            <div  className={'container'}>
                <div className={"case-study-wrap"}>
                    <div className={"section-title text-center"}>
                        <h3 className={"sub-title"}>Our Projects</h3>
                        <h2 className={"title"}>Innovation a Passion</h2>
                    </div>
                </div>
            </div>

       {/*      <!-- Case Study Slider Wrap Start --> */}
            <div className={"case-study-slider-wrap"}>
                <div className={"swiper-container case-study-active"}>
                    <div className={"swiper-wrapper"}>
                        <div className={"swiper-slide"}>
                            {/* <!-- Single Case Study Start --> */}
                            <div className={"single-case-study text-center"} style={{backgroundImage: 'url(assets/images/c-study-1.jpg)'}}>
                                <div className={"case-study-content"}>
                                    <div className={"case-study-title"}>
                                        <h3 className={"title"}>Aeroland Protocol</h3>
                                        <span>Cyber Secutiy</span>
                                    </div>
                                    <div className={"case-study-text"}>
                                        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                                    </div>
                                    <div className={"case-study-link"}>
                                        <a href="#a"><i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                           {/*  <!-- Single Case Study End --> */}
                        </div>
                        <div className={"swiper-slide"}>
                          {/*   <!-- Single Case Study Start --> */}
                            <div class={"single-case-study text-center"} style={{backgroundImage: 'url(assets/images/c-study-2.jpg)'}}>
                                <div className={"case-study-content"}>
                                    <div className={"case-study-title"}>
                                        <h3 className={"title"}>Analytic Solutions</h3>
                                        <span>IT Technology</span>
                                    </div>
                                    <div className={"case-study-text"}>
                                        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                                    </div>
                                    <div className={"case-study-link"}>
                                        <a href="#a"><i className={"fas fa-long-arrow-alt-right"}></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Case Study End --> */}
                        </div>
                        <div className={"swiper-slide"}>
                            {/* <!-- Single Case Study Start --> */}
                            <div className={"single-case-study text-center"} style={{backgroundImage: 'url(assets/images/c-study-3.jpg)'}}>
                                <div className={"case-study-content"}>
                                    <div className={"case-study-title"}>
                                        <h3 className={"title"}>Product Design</h3>
                                        <span>IT Technology</span>
                                    </div>
                                    <div className={"case-study-text"}>
                                        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                                    </div>
                                    <div className="{case-study-link}">
                                        <a href="#a"><i className={"fas fa-long-arrow-alt-right"}></i></a>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- Single Case Study End --> */}
                        </div>
                    </div>

                    {/* <!-- Add Pagination --> */}
                    <div className={"case-study-arrow swiper-button-next"}></div>
                    <div className={"case-study-arrow swiper-button-prev"}></div>

                    <div className={"swiper-pagination"}></div>
                </div>
            </div>
           {/*  <!-- Case Study Slider Wrap End --> */}

            {/* <!-- Case Study Button Start --> */}
            <div className={"row jusify-content-center"}>
                <div className={"case-study-btn text-center"}>
                    <a className={"btn"} href="#a">See More Projects</a>
                </div>
            </div>
           {/*  <!-- Case Study Button End --> */}

        </div>
    )

}

export default ProjectCard