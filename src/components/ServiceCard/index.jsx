function ServiceCard(){
    return(
        <div   className={"section service-section"}>
        <div   className={"container"} id="services">
            <div   className={"service-wrap"}>
                <div   className={"row"}>
                    <div   className="col-lg-3 col-sm-6">
                       
                        <div   className={"service-item text-center"}>
                            <div   className={"shape-1"}></div>
                            <div   className={"shape-2"}>
                                <img src="assets/images/service/s-shape-2.png" alt=""/>
                            </div>
                            <div   className={"service-icon"}>
                                <img src="assets/images/service/service-1.png" alt=""/>
                            </div>
                            <div   className={"service-content"}>
                                <h3   className="title"><a href="services?slug=software-development">Software <br/> Development</a></h3>
                                <p>Ergonomic, scalable, powerful web and mobile apps implementation.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div   className={"col-lg-3 col-sm-6"}>
                       
                        <div   className={"service-item text-center"}>
                            <div   className={"shape-1"}></div>
                            <div   className={"shape-2"}>
                                <img src="assets/images/service/s-shape-2.png" alt=""/>
                            </div>
                            <div   className={"service-icon"}>
                                <img src="assets/images/service/service-2.png" alt=""/>
                            </div>
                            <div   className={"service-content"}>
                                <h3   className={"title"}><a href="services?slug=graphics-design">Graphics <br/> Design</a></h3>
                                <p>Amazing user interface and user experience.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div   className={"col-lg-3 col-sm-6"}>
                       
                        <div   className={"service-item text-center"}>
                            <div   className={"shape-1"}></div>
                            <div   className={"shape-2"}>
                                <img src="assets/images/service/s-shape-2.png" alt=""/>
                            </div>
                            <div   className="service-icon">
                                <img src="assets/images/service/service-3.png" alt=""/>
                            </div>
                            <div   className="service-content">
                                <h3   className="title"><a href="services?slug=content-production">Content <br/> Production</a></h3>
                                <p>Written, audio and visual content production.</p>
                            </div>
                        </div>
                
                    </div>
                    <div   className={"col-lg-3 col-sm-6"}>
                     
                        <div   className={"service-item text-center"}>
                            <div   className={"shape-1"}></div>
                            <div   className={"shape-2"}>
                                <img src="assets/images/service/s-shape-2.png" alt=""/>
                            </div>
                            <div   className="service-icon">
                                <img src="assets/images/service/service-4.png" alt=""/>
                            </div>
                            <div   className={"service-content"}>
                                <h3   className={"title"}><a href="services?slug=IT-consulting">IT <br/> Consulting</a></h3>
                                <p>Advising, maintenance on existing products.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ServiceCard
