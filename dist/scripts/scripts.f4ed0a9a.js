"use strict";angular.module("AngSpress-Seed",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngAnimate-animate.css"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html"}).when("/portfolio",{templateUrl:"views/portfolio.html"}).otherwise({redirectTo:"/"})}]),angular.module("AngSpress-Seed").controller("MainCtrl",["$scope",function(a){a.download=function(){var a=confirm("would you like to download my resume?");a&&window.open("./images/Wysocki_Leigh_Resume.docx")}}]),angular.module("AngSpress-Seed").run(["$templateCache",function(a){a.put("views/about.html",'<div class="blk-info-holder portfolio-overlay fade-in" align="center"> <!-- title --> <h2>Leigh Wysocki</h2> <br> <!-- about me image --> <img src="../images/leigh.30bee2b7.jpg" alt="" class="img-personal"> <br> <br> <!-- about me text --> <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> <!-- about me quote --> <blockquote class="blockquote"> <p><i>This is a very profound quote we have here. Truly something special...</i></p> <footer>John Kaufmann in <cite title="Source Title">This Quote</cite></footer> </blockquote> <hr class="style-two"> <!-- social media links --> <a href="https://google.com" target="_blank"><img src="../images/google.86f434a0.png" alt="" class="img-social-media"></a><span>&middot;</span> <a href="https://twitter.com" target="_blank"><img src="../images/twitter.ea5272bc.png" alt="" class="img-social-media"></a><span>&middot;</span> <a href="https://linkedin.com" target="_blank"><img src="../images/linkedin.fee0b862.png" alt="" class="img-social-media"></a> </div>'),a.put("views/main.html",'<!-- angular controller --> <section ng-controller="MainCtrl as settings"> <div class="className" align="center"> <!-- homepage buttons --> <a href="#/portfolio" class="btn btn-outlined btn-white btn-lg fade-in-left-btn" data-wow-delay="0.7s">Portfolio</a> <a class="btn btn-outlined btn-white btn-lg fade-in-middle-btn" data-wow-delay="0.7s" ng-click="download()">Resume</a> <a href="#/about" class="btn btn-outlined btn-white btn-lg fade-in-right-btn" data-wow-delay="0.7s">About Me</a> </div> </section>'),a.put("views/portfolio.html",'<!-- hides scrollbar --> <div class="" style="overflow: hidden"> <div class="blk-info-holder portfolio-overlay fade-in" align="center"> <!-- portfolio title --> <h2>Leigh Wysocki</h2> <br> <!-- portfolio section --> <div class="portfolio-text row"> <div class="row"> <div class="font-24"><img src="../images/education.a60dde05.png" alt="" class="img-portfolio"> Education <img src="../images/education.a60dde05.png" alt="" class="img-portfolio"></div> </div> <br> <div class="row"> <ul class="list-inline"> <li><b>B.S. Industrial Engineering</b></li> <li>/</li> <li>University of Florida, Gainesville, FL</li> <li>/</li> <li>Expected Graduation: May 2018</li> <br>Minor in Business Administration <br> University of Florida Honors Program <br> GPA: 3.84/4.00 </ul> </div> </div> <hr class="style-two"> <!-- portfolio section --> <div class="portfolio-text row"> <div class="row"> <div class="font-24"><img src="../images/experience.53a41709.png" alt="" class="img-portfolio"> Employment <img src="../images/experience.53a41709.png" alt="" class="img-portfolio"></div> </div> <br> <div class="row"> <ul class="list-inline"> <li><b>Recruitment Assistant</b></li> <li>/</li> <li>Vector Marketing</li> <li>/</li> <li>Gainesville, FL</li> <br> Recruited potential sales associates over the phone <br> Spoke with over 80 potential employees weekly </ul> <ul class="list-inline"> <li><b>Nanny & Babysitter</b></li> <li>/</li> <li>Various Families</li> <li>/</li> <li>Naples, FL</li> <br> Provided care for children ranging from newborn to age 12, 1-5 days a week <br> Maintained a variety of clients’ long-term and short-term needs </ul> <ul class="list-inline"> <li><b>Counselor</b></li> <li>/</li> <li>Sports CLUB</li> <li>/</li> <li>Naples, FL</li> <br> Supervised and entertained children through sports activities and homework assistance <br> Assisted in program bookkeeping and records maintenance </ul> </div> </div> <hr class="style-two"> <!-- portfolio section --> <div class="portfolio-text row"> <div class="row"> <div class="font-24"><img src="../images/organizations.678de509.png" alt="" class="img-portfolio"> Organizations <img src="../images/organizations.678de509.png" alt="" class="img-portfolio"></div> </div> <br> <div class="row"> <ul class="list-inline"> <li><b>Gator Launch</b></li> <li>/</li> <li>University of Florida</li> <li>/</li> <li>Gainesville, FL</li> <br>Acquire real-world skills from an Industrial Engineering mentor in the work force <br> Participate in career development and networking activities </ul> <ul class="list-inline"> <li><b>Pi Beta Phi Fraternity for Women</b></li> <li>/</li> <li>University of Florida</li> <li>/</li> <li>Gainesville, FL</li> <br>Lead 83 underclassman women as they transition to UF and Greek life <br> Interviewed and selected a board of eight assistants to support this position </ul> <ul class="list-inline"> <li><b>Dance Marathon</b></li> <li>/</li> <li>University of Florida</li> <li>/</li> <li>Gainesville, FL</li> <br>Maintain security, cleanliness, and safety during the 26-hour long event <br> Work on a team of 25 to ensure an efficiently managed event for over 2,000 participants </ul> </div> </div> <hr class="style-two"> <!-- portfolio section --> <div class="skills row"> <div class="row"> <div class="font-24"><img src="../images/skills.b83f1e36.png" alt="" class="img-portfolio"> Skills <img src="../images/skills.b83f1e36.png" alt="" class="img-portfolio"></div> </div> <br> <div class="row"> <ul class="list-inline"> <li><b>Certifications:</b></li> <li>Certified in SolidWorks 3D CAD</li> <li>/</li> <li>Microsoft Excel</li> <li>/</li> <li>PowerPoint</li> <li>/</li> <li>Word</li> </ul> <ul class="list-inline"> <li><b>Proficiencies:</b></li> <li>Visual Basic programming language</li> <li>/</li> <li>Internet research</li> <li>/</li> <li>social media applications</li> </ul> <ul class="list-inline"> <li><b>Familiarity:</b></li> <li>Adobe photoshop</li> </ul> </div> </div> </div> </div>')}]);