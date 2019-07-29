import React, {Component} from 'react'

export default class extends Component{
    render(){

        return(
<section>
          <div className="container">
            <h1 className="text-center"> My Journey </h1>
            <div className="timeline flex-container">
              <div className="timeline-item flex-items-default selected">
                <div className="timeline-content text-left animated bounceIn">
                  <h2> UT Austin </h2>
                  <p> In August of 2018, I started studying Computer Science B.S. at The University of Texas at Austin. While I am here, I plan on getting a minor in Business Foundations and a certificate in Statistical Modeling. </p>
                </div>
              </div>
              <div className="timeline-item flex-items-default">
                <div className="timeline-content text-left ">
                  <h2>Texas Convergent: PHLY </h2>
                  <p>In December of 2018, I became a part of an incubator company through Texas Convergent, called PHLY. PHLY is a non-profit start-up company aimed at making the process of microdonations more efficient, while including features to create a larger payment conglomerate. I am a front-end developer on this team, working to create a mobile app and website. </p>
                </div>
              </div>
              <div className="timeline-item flex-items-default">
                <div className="timeline-content text-left">
                  <h2> Women in Computer Science: Social Outreach Chair</h2>
                  <p>In May of 2019, I interviewed and was selected as a Social Outreach chair for my school’s Women in Computer Science organization.  I am going to be responsible for organizing community events that are in support of creating a welcoming environment for women interested in computing. </p>
                </div>
              </div>
              <div className="timeline-item flex-items-default">
                <div className="timeline-content text-left">
                  <h2> Recycle Now </h2>
                  <p> In January of 2019, during a hackathon organized by the Women Computer Science organization, my team and I put together a small project called Recycle Now. It is an app that allows users to take pictures of random objects and returns the right method of disposal depending on what it is: Recycle, Compost or Trash. To build this app we used Apple’s Machine Learning toolkit as well as Swift to deploy it onto an app. </p>
                </div>
              </div>
              <div className="timeline-item flex-items-default">
                <div className="timeline-content text-left">
                  <h2>Internship: MassMutual</h2>
                  <p>During the summer of 2019, I have been interning with the Life Insurance Company MassMutual as a Software Engineering Intern. As a front-end developer on the Interactive Content and Tools team, I have been working to enhance the Calculators on the webpage as well contributing to the MassMutual React Component Library. </p>
                </div>
              </div>
              <div className="dropdown animated bounceIn" style={{left: '-88px'}}>
                <div className="inner">
                  <div className="arrow-down" />
                </div>
              </div>
            </div>
          </div>
        </section>
)
}
}