import React from 'react';
import Typist from 'react-typist';
import './App.css';
import Timeline from "./timeline"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPosition: 0
    }
  }
  componentDidMount() {
    //var $timeline        = $('.timeline');
    const that = this;
    window.addEventListener('scroll', function (e) {
      that.setState({ scrollPosition: document.documentElement.scrollTop })
      console.log("you scrolled", document.documentElement.scrollTop)
    });

  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch("/contact", {method : "POST", body: data});
    const json = await response.json();
    console.log(json);
    console.log(response);
  }

  render() {
    const pageOne = (this.state.scrollPosition > document.body.scrollHeight / 20) ? ' openPage' : '';
    const pageTwo = (this.state.scrollPosition > (document.body.scrollHeight / 3)) ? ' closePage' : '';
    return (
      <div className="App">
        <div className={"mainPage mainPage--left" + pageOne}>
          <div className="introduction">
            <Typist
            avgTypingDelay={40}
            >
              <p className="nameTitle"> Hi, I am CKDasari! </p>
              <Typist.Delay ms={1000} />
              
              <br></br>
              <p className="aboutMe" > I am a rising sophomore at the University of Texas at Austin, majoring in Computer Science and minoring in Business Foundations</p>
            </Typist>
          </div>
          
        </div>
        <div className={"mainPage mainPage--right" + pageOne}>
          <img class = "profile" src = {`${process.env.PUBLIC_URL}/images/website_profile.png`} alt = ""></img>
          <div className = "socialLinks">
            <a href = 'https://www.linkedin.com/in/tejna-dasari-454b3516a/'>
              <img class = "linkedin" height = "50px" src = {`${process.env.PUBLIC_URL}/images/linkedin.png`} alt = ""></img>
            </a>
            <a href = 'https://github.com/tejnadasari'>
              <img class = "gitHub" height = "50px" src = {`${process.env.PUBLIC_URL}/images/Octocat.png`} alt = ""></img>
            </a>
            <a href = 'https://www.instagram.com/tejnadasari/?hl=en'>
              <img class = "instagram" height = "50px"  src = {`${process.env.PUBLIC_URL}/images/instagram'.png`} alt = ""></img>
            </a>
          </div>
        </div>
        <div className={"lastPage lastPage--left" + pageTwo}>
          <form className = "form" onSubmit = {this.handleSubmit}>
          <br></br>
          <br></br>
            <h1 className="introStatements">
              Let's Talk.
            </h1>
            <h2 className="introStatements">
              Fill this out so I can get back to you!
            </h2>
            <br></br>
            <br></br>
            <div className="inputs">
              <p className="basic nameSentence">
                My <em> name </em> is
                  <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name" />.
              </p>
              <br></br>
              <p className="basic interestSentence">
                I am a
                <span>
                  <select name="occupation">
                    <option value="Student"> Student </option>
                    <option value="Recruiter"> Recruiter </option>
                    <option value="Other"> Other </option>
                  </select>
                </span>
                , who is interested in
                <input
                  type="text"
                  name="subject" />.
                <br></br>
                <br></br>
              I am looking to talk to you about
                <input
                  type="text"
                  name="topic" />.
                <br></br>
                <br></br>
            </p>
              <p className="basic contactMe">
                The best <em>number</em> you can reach me at is
                <input
                  type="phone"
                  name="phoneNumber"
                  placeholder="###-###-####"
                  pattern="^[2-9]\d{2}-\d{3}-\d{4}$" />
                and
                <br></br>
                <br></br>
                <em> email</em> me at
                <input
                  type="email"
                  name="emailAddress"
                  placeholder=" Email Address " />
                to get in touch. Thanks!
            </p>
            </div>
            <br></br>
            <br></br>
            <p>
              <input className="button" type="submit" value="Submit" />
            </p>
          </form>
        </div>
        <div className={"lastPage lastPage--right" + pageTwo}>
          {/* <img height = "100%" width = "100%"src = {`${process.env.PUBLIC_URL}/images/lastRight.svg`} alt = ""></img> */}
        </div>
        <div className="secondPage">
        <Timeline></Timeline>
        </div>
      </div>
    );
  }
}

export default App;
