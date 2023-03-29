import React from 'react'

const Content = () => {
  return (
    <div className="page-content bg-white">
      
        <div className="page-banner ovbl-dark" style={{backgroundImage:'url(assets/images/banner/banner1.jpg)'}}>
            <div className="container">
                <div className="page-banner-entry">
                    <h1 className="text-white">Portfolio</h1>
				 </div>
            </div>
        </div>
		
		<div className="breadcrumb-row">
			<div className="container">
				<ul className="list-inline">
					<li><a href="#">Home</a></li>
					<li>Portfolio</li>
				</ul>
			</div>
		</div>
		
        <div className="content-block">
			
			<div className="section-area section-sp1 gallery-bx">
				<div className="container">
					<div className="feature-filters clearfix center m-b40">
						<ul className="filters" data-toggle="buttons">
							<li data-filter="" className="btn active">
								<input type="radio"/>
								<a href="#"><span>All</span></a> 
							</li>
							<li data-filter="book" className="btn">
								<input type="radio"/>
								<a href="#"><span>Book</span></a> 
							</li>
							<li data-filter="courses" className="btn">
								<input type="radio"/>
								<a href="#"><span>Courses</span></a> 
							</li>
							<li data-filter="education" className="btn">
								<input type="radio"/>
								<a href="#"><span>Education</span></a> 
							</li>
						</ul>
					</div>
					<div className="clearfix">
						<ul id="masonry" className="ttr-gallery-listing magnific-image row">
							<li className="action-card col-lg-3 col-md-4 col-sm-6 book">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_1.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_1.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 education book">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_2.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_2.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 courses">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_3.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_3.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 book education">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_4.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_4.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 courses">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_5.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_5.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 education">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_6.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_6.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 book">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_7.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_7.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 courses">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_8.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_8.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 education courses">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_9.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_9.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 book">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_10.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_10.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 courses">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_11.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_11.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="action-card col-lg-3 col-md-4 col-sm-6 education book">
								<div className="ttr-box portfolio-bx">
									<div className="ttr-media media-ov2 media-effect">
										<a href="javascript:void(0);">
											<img src="assets/images/portfolio/image_12.jpg" alt=""/> 
										</a>
										<div className="ov-box">
											<div className="overlay-icon align-m"> 
												<a href="assets/images/portfolio/image_12.jpg" className="magnific-anchor" title="Title Come Here">
													<i className="ti-search"></i>
												</a>
											</div>
											<div className="portfolio-info-bx bg-primary">
												<h4><a href="#">Soft skills</a></h4>
												
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
        </div>
		
    </div>
  )
}

export default Content