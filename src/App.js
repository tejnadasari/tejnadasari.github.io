import React from 'react';
import Typist from 'react-typist';
import './App.css';
import Timeline from "./timeline"
import axios from 'axios'

axios.defaults.headers = {
  'Content-Type': 'application/json',
};

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      scrollPosition: 0,
      contactInfo: {
        name: '',
        email: '',
        message: '',
        phoneNumber: '',
        occupation: ''
      }
    }

    this.setData = this.setData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
    //var $timeline        = $('.timeline');
    const that = this;
    window.addEventListener('scroll', function (e) {
      that.setState({ scrollPosition: window.scrollY })
      console.log("you scrolled", window.scrollY)
    });
  }

  setData(event) {
    event.preventDefault()
    const { name, value } = event.target
    this.setState(state => ({ ...state, contactInfo: { ...state.contactInfo, [name]: value } }))
  }
  
  // afterSubmit(event) {
  //   event.preventDefault();
  //   event.target.reset();
  // }

  async handleSubmit(event) {
    event.preventDefault();
    try {
    const postBody = {
      "body": {
        "name": this.state.contactInfo.name,
        "email": this.state.contactInfo.email,
        "message": this.state.contactInfo.message,
        "phoneNumber": this.state.contactInfo.phoneNumber,
        "occupation": this.state.contactInfo.occupation
      }
    }
    const response = await axios.post("https://z2uezle44b.execute-api.us-east-1.amazonaws.com/prod/contactme", postBody);
    console.log(response);
    } catch(error) {
      console.log('Whoops', error)
    }
  }

  render() {
    console.log(this.state)
    const pageOne = (this.state.scrollPosition > document.body.scrollHeight / 20) ? ' openPage' : '';
    const pageTwo = (this.state.scrollPosition > (document.body.scrollHeight / 3)) ? ' closePage' : '';
    return (
      <div className="App">
        <div className={"mainPage mainPage--left" + pageOne}>
          <div className="introduction">
            <Typist
            avgTypingDelay={40}
            >
              <p className="nameTitle"> Hi, I am Tejna Dasari! </p>
              <Typist.Delay ms={1000} />
              
              <br></br>
              <p className="aboutMe" > A rising sophomore at The University of Texas at Austin, majoring in Computer Science and minoring in Business Foundations</p>
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
                  name="name"
                  onChange={this.setData}
                  placeholder="Full Name" />.
              </p>
              <br></br>
              <p className="basic interestSentence">
                I am a
                <span>
                  <select name="occupation"
                  onChange={this.handleChange}
                  >
                    <option value="Student"> Student </option>
                    <option value="Recruiter"> Recruiter </option>
                    <option value="Other"> Other </option>
                  </select>
                </span>
                .
                <br></br>
                <br></br>
              I am looking to talk to you about
                <input
                  type="text"
                  name="message" 
                  onChange={this.setData}
                  />.
                <br></br>
                <br></br>
            </p>
              <p className="basic contactMe">
                The best <em>number</em> you can reach me at is
                <input
                  type="phone"
                  name="phoneNumber"
                  placeholder="###-###-####"
                  onChange={this.setData}
                  />
                <br></br>
                <br></br>
                <em> and email</em> me at
                <input
                  type="email"
                  name="email"
                  placeholder=" Email Address " 
                  onChange={this.setData}/>
                to get in touch. Thanks!
            </p>
            </div>
            <br></br>
            <br></br>
            <p>
              <button 
                className="button" 
                type="submit"
                //onClick = {this.afterSubmit}
                >
                  Submit
                </button>
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
