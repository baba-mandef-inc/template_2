function BlogCard(){
    return (
       /*  <!-- Blog Start --> */
        <div className="section blog-section section-padding-02">
            <div className="container">
                {/* <!-- Blog Wrap Start --> */}
                <div className="blog-wrap">
                    <div className="section-title text-center">
                        <h3 className="sub-title">News & Blog</h3>
                        <h2 className="title">Latest articles on our blog</h2>
                    </div>
                    {/* <!-- Blog Content Wrap Start --> */}
                    <div className="blog-content-wrap">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                {/* <!-- Single Blog Start --> */}
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-details.html"><img src="assets/images/blog/blog-1.jpg" alt=""></img></a>
                                        <div className="top-meta">
                                            <span className="date"><span>08</span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">Andrew Paker</a></span>
                                            <span><i className="far fa-comments"></i> 0 Comments</span>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Who Needs Extract Value From Data?</a></h3>
                                        <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a className="blog-btn-link" href="blog-details.html">Read Full Article <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                               {/*  <!-- Single Blog End --> */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                              {/*   <!-- Single Blog Start --> */}
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-details.html"><img src="assets/images/blog/blog-2.jpg" alt=""></img></a>
                                        <div className="top-meta">
                                            <span className="date"><span>10</span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">Andrew Paker</a></span>
                                            <span><i className="far fa-comments"></i> 0 Comments</span>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Easy and Most Powerful Server and Platform.</a></h3>
                                        <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a className="blog-btn-link" href="blog-details.html">Read Full Article <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Single Blog End --> */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                               {/*  <!-- Single Blog Start --> */}
                                <div className="single-blog">
                                    <div className="blog-img">
                                        <a href="blog-details.html"><img src="assets/images/blog/blog-3.jpg" alt=""></img></a>
                                        <div className="top-meta">
                                            <span className="date"><span>08</span>Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span><i className="fas fa-user"></i> <a href="#">Andrew Paker</a></span>
                                            <span><i className="far fa-comments"></i> 0 Comments</span>
                                        </div>
                                        <h3 className="title"><a href="blog-details.html">Back up your database, store in a safe</a></h3>
                                        <p>Accelerate innovation with world-className tech teams We’ll match you to an entire remote.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a className="blog-btn-link" href="blog-details.html">Read Full Article <i className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                               {/*  <!-- Single Blog End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Blog Content Wrap End --> */}
                </div>
               {/*  <!-- Blog Wrap End --> */}
            </div>
        </div>
    
    )

}

export default BlogCard