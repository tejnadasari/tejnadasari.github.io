import React from 'react';
import Typist from 'react-typist';
import './App.css';


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

  render() {
    const pageOne = (this.state.scrollPosition > document.body.scrollHeight / 20) ? ' openPage' : '';
    const pageTwo = (this.state.scrollPosition > (document.body.scrollHeight / 3)) ? ' closePage' : '';
    return (
      <div className="App">
        <div className={"mainPage mainPage--left" + pageOne}>
          <div className="introduction">
            <Typist>
              <p className="nameTitle"> Hello, my name is Tejna Dasari. </p>
              <Typist.Delay ms={1000} />
              <br></br>
              <p className="aboutMe" > I am a rising sophomore at the University of Texas at Austin, majoring in Computer Science and minoring in Business Foundations</p>
            </Typist>
          </div>
        </div>
        <div className={"mainPage mainPage--right" + pageOne}>
          <img class = "profile" src = "images/profilePhoto.jpg" alt = ""></img>
        </div>
        <div className={"lastPage lastPage--left" + pageTwo}>
          <form className = "form" action = "contact.php" method = "post">
            <h1 className="introStatements">
              Let's Talk.
            </h1>
            <h2 className="introStatements">
              Fill this out so I can get back to you!
            </h2>
            <div className="form">
              <p className="basic nameSentence">
                My <em> name </em> is
                  <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name" />.
              </p>
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
              I am looking to talk to you about
                <input
                  type="text"
                  name="topic" />.
            </p>
              <p className="basic contactMe">
                The best <em>number</em> you can reach me at is
                <input
                  type="phone"
                  name="phoneNumber"
                  placeholder="###-###-####"
                  pattern="^[2-9]\d{2}-\d{3}-\d{4}$" />
                and
                <em> email</em> me at
                <input
                  type="email"
                  name="emailAddress"
                  placeholder=" Email Address " />
                to get in touch. Thanks!
            </p>
            </div>
            <p>
              <input className="button" type="submit" value="Submit" />
            </p>
          </form>
        </div>
        <div className={"lastPage lastPage--right" + pageTwo}>
          <img height = "100%" width = "100%"src = "images.lastRight.svg" alt = ""></img>
        </div>
        <div className="secondPage">
        </div>
      </div>
    );
  }
}

export default App;
