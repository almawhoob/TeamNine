import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './images/logo.png';
import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/animate.min.css';
import './css/lightbox.css';
import './css/main.css';
import './css/responsive.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <script src="jquery-3.2.1.js"></script>
        <title>Home | TeamNine</title>

      {/*
      <div>
        <link rel="stylesheet" href="./css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./css/font-awesome.min.css"/>
        <link rel="stylesheet" href="./css/animate.min.css"/>
        <link rel="stylesheet" href="./css/lightbox.css"/>
        <link rel="stylesheet" href="./css/main.css"/>
        <link rel="stylesheet" href="./css/responsive.css"/>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
      </div>
      */}

        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>*/}
        {/*<h1>Hello World</h1>*/}
        <header classId="header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 overflow">
                 <div className="social-icons pull-right">
                      <ul className="nav nav-pills">
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                  </div>
              </div>
           </div>
          </div>


        {/*<div className="navbar navbar-inverse" role="banner">*/}
        <div className="navbar" role="banner">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a className="navbar-brand" href="index.html">
                    	{/*<h1><img src={logo} className="App-logo" alt="logo"/></h1>*/}
                      <h1><img src={logo} className="" alt="logo" height="40"/></h1>
                    </a>

                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li className=""><a href="projects.html">Projects</a></li>
                        <li className=""><a href="projects.html">Workshops</a></li>

                        <li><a href="shortcodes.html ">Dev</a></li>
                    </ul>
                </div>
                <div className="search">
                    <form role="form">
                        <i className="fa fa-search"></i>
                        <div className="field-toggle">
                            <input type="text" className="search-form" autoComplete="off" placeholder="Search"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </header>


        <section id="home-slider">
                <div className="container">
                    <div className="row">
                        <div className="main-slider">
                            <div className="slide-text">
                                <h1>We Are Creative Nerds</h1>
                                <p>Boudin doner frankfurter pig. Cow shank bresaola pork loin tri-tip tongue venison pork belly meatloaf short loin landjaeger biltong beef ribs shankle chicken andouille.</p>
                                <a href="#" className="btn btn-common">SIGN UP</a>
                            </div>
                            <img src={require('./images/home/slider/hill.png')} className="slider-hill" alt="slider 1"/>
                            <img src={require('./images/home/slider/house.png')} className="slider-house" alt="slider 2"/>
                            <img src={require('./images/home/slider/sun.png')} className="slider-sun" alt="slider 3"/>
                            <img src={require('./images/home/slider/birds1.png')} className="slider-birds1" alt="slider 4"/>
                            <img src={require('./images/home/slider/birds2.png')} className="slider-birds2" alt="slider 5"/>
                        </div>
                    </div>
                </div>
                <div className="preloader"><i className="fa fa-sun-o fa-spin"></i></div>
            </section>

            <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="single-service">
                        <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
                        <img src={require('./images/home/icon1.png')} alt=""/>
                        </div>
                        <h2>Hands on Experience</h2>
                        <p>Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. Cow shankle beef sirloin chicken ground round.</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="single-service">
                        <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="600ms">
                          <img src={require('./images/home/icon2.png')} alt=""/>
                        </div>
                        <h2>Knowledge &amp; Skills Exchange</h2>
                        <p>Hamburger ribeye drumstick turkey, strip steak sausage ground round shank pastrami beef brisket pancetta venison.</p>
                    </div>
                </div>
                <div className="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="900ms">
                    <div className="single-service">
                        <div className="wow scaleIn" data-wow-duration="500ms" data-wow-delay="900ms">
                            <img src={require('./images/home/icon3.png')} alt=""/>
                        </div>
                        <h2>Job Opportunities</h2>
                        <p>Venison tongue, salami corned beef ball tip meatloaf bacon. Fatback pork belly bresaola tenderloin bone pork kevin shankle.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="action" className="responsive">
            <div className="vertical-center">
                 <div className="container">
                    <div className="row">
                        <div className="action take-tour">
                            <div className="col-sm-7 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                                <h1 className="title">Not sure where to start from?</h1>
                                <p>Learn more about TeamNine and how we can help you improve your skills.</p>
                            </div>
                            <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                                <div className="tour-button">
                                    <a href="#" className="btn btn-common">TAKE THE TOUR</a>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>

       <section id="features">
               <div className="container">
                   <div className="row">
                       <div className="single-features">
                           <div className="col-sm-5 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                               <img src={require('./images/home/image1.png')} className="img-responsive" alt=""/>
                           </div>
                           <div className="col-sm-6 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                               <h2>Grasp the Opportunity</h2>
                               <p>Pork belly leberkas cow short ribs capicola pork loin. Doner fatback frankfurter jerky meatball pastrami bacon tail sausage. Turkey fatback ball tip, tri-tip tenderloin drumstick salami strip steak.</p>
                           </div>
                       </div>
                       <div className="single-features">
                           <div className="col-sm-6 col-sm-offset-1 align-right wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                               <h2>Compete with Others</h2>
                               <p>Mollit eiusmod id chuck turducken laboris meatloaf pork loin tenderloin swine. Pancetta excepteur fugiat strip steak tri-tip. Swine salami eiusmod sint, ex id venison non. Fugiat ea jowl cillum meatloaf.</p>
                           </div>
                           <div className="col-sm-5 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                               <img src={require('./images/home/image2.png')} className="img-responsive" alt=""/>
                           </div>
                       </div>
                       <div className="single-features">
                           <div className="col-sm-5 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                               <img src={require('./images/home/image3.png')} className="img-responsive" alt=""/>
                           </div>
                           <div className="col-sm-6 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                               <h2>Keep Moving...</h2>
                               <p>Ut officia cupidatat anim excepteur fugiat cillum ea occaecat rump pork chop tempor. Ut tenderloin veniam commodo. Shankle aliquip short ribs, chicken eiusmod exercitation shank landjaeger spare ribs corned beef.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="clients">
                   <div className="container">
                       <div className="row">
                           <div className="col-sm-12">
                               <div className="clients text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                                   <p><img src={require('./images/home/clients.png')} className="img-responsive" alt=""/></p>
                                   <h1 className="title">Our Partners</h1>
                                   <p>TeamNine would not here without the support of our great partners.</p>
                               </div>
                               <div className="clients-logo wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                                   <div className="col-xs-3 col-sm-2">
                                    <a href="#"><img src={require('./images/home/uottawa_hor_black.png')} className="img-responsive" alt="" height="50" width="130"/></a>
                                   </div>
                                    <div className="col-xs-3 col-sm-2">
                                      <a href="#"><img src={require('./images/home/uottawa_hor_black.png')} className="img-responsive" alt="" height="50" width="130"/></a>
                                   </div>
                                    <div className="col-xs-3 col-sm-2">
                                      <a href="#"><img src={require('./images/home/uottawa_hor_black.png')} className="img-responsive" alt="" height="50" width="130"/></a>
                                   </div>
                                    <div className="col-xs-3 col-sm-2">
                                      <a href="#"><img src={require('./images/home/uottawa_hor_black.png')} className="img-responsive" alt="" height="50" width="130"/></a>
                                   </div>
                                    <div className="col-xs-3 col-sm-2">
                                      <a href="#"><img src={require('./images/home/uottawa_hor_black.png')} className="img-responsive" alt="" height="50" width="130"/></a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </section>

                <footer id="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center bottom-separator">
                                    <img src={require('./images/home/under.png')} className="img-responsive inline" alt=""/>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="testimonial bottom">
                                        <h2>Testimonial</h2>
                                        <div className="media">
                                            <div className="pull-left">
                                                <a href="#"><img src={require('./images/home/profile1.png')} alt=""/></a>
                                            </div>
                                            <div className="media-body">
                                                <blockquote>Porttitor fames cras cras tortor taciti etiam ac ac tristique.</blockquote>
                                                <h3><a href="#">- Habib Albi</a></h3>
                                            </div>
                                         </div>
                                        <div className="media">
                                            <div className="pull-left">
                                                <a href="#"><img src={require('./images/home/profile2.png')} alt=""/></a>
                                            </div>
                                            <div className="media-body">
                                                <blockquote>Porttitor, sit adipiscing tempus tristique urna ac tristique.</blockquote>
                                                <h3><a href="">- Habib Albo</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="contact-info bottom">
                                        <h2>Contact Us</h2>
                                        <address>
                                        E-mail: <a href="mailto:someone@example.com">info@teamNine.com</a> <br/>
                                        Phone: +1 (613) 613 6133 <br/>
                                        Fax: +1 (613) 613 6133 <br/>
                                        </address>

                                        <h2>Address</h2>
                                        <address>
                                        University of Ottawa, <br/>
                                        Ottawa, Ontario <br/>
                                        Canada <br/>
                                        </address>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contact-form bottom">
                                        <h2>Send a message</h2>
                                        <form id="main-contact-form" name="contact-form" method="post" action="sendemail.php">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" required="required" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" required="required" placeholder="Email Id"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your text here"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" name="submit" className="btn btn-submit" value="Submit"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="copyright-text text-center">
                                        <p>&copy; TeamNine 2017. All Rights Reserved.</p>
                                        {/*<p>Designed by <a target="_blank" href="http://www.themeum.com">Themeum</a></p>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <script type="text/javascript" src="js/jquery.js"></script>
          <script type="text/javascript" src="js/bootstrap.min.js"></script>
          <script type="text/javascript" src="js/lightbox.min.js"></script>
          <script type="text/javascript" src="js/wow.min.js"></script>
          <script type="text/javascript" src="js/main.js"></script>
        </div>

      </div>
    );
  }
}

export default App;
