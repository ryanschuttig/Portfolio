import PropTypes from 'prop-types'
import React from 'react'
import Arcadian from '../images/Arcadian.png'
import Bandify from '../images/Bandify.png'
import NoteTaker from '../images/NoteTaker.png'
import FitnessTracker from '../images/FitnessTracker.png'
import ImgStyle from '../components/ImgStyle.css'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main"></span>
          <p>Utilizing skills in JavaScript, React, Angular, CSS, MongoDB, Express, and Node.js, I prioritize fast loading times, lag free interaction, responsive layouts, intuitive UX/UI, and dynamic pages.</p>
          <p>Let's create something special!</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main"></span>
          <p><a href="https://react-arcadian.herokuapp.com/" target="_blank"><img className="photo" src={Arcadian}></img><br></br>Arcadian - Our online arcade!</a></p>
          <p><a href="https://camerong88.github.io/Bandify/" target="_blank"><img className="photo" src={Bandify}></img><br></br>Bandify - Find your favorite artists, music and tour dates!</a></p>
          <p><a href="https://note-taker-rs.herokuapp.com/notes" target="_blank"><img className="photo" src={NoteTaker}></img><br></br>Note Taker - A simple note taking app!</a></p>
          <p><a href="https://rs-workout-tracker.herokuapp.com/" target="_blank"><img className="photo" src={FitnessTracker}></img><br></br>Fitness Tracker - Keep track of your fitness goals!</a></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <a href="tel:5186946664">(518) 694-6664</a>
          <br></br><br></br>
          <a href="mailto:ryanschuttig@gmail.com">ryanschuttig@gmail.com</a>
          <br></br><br></br>
          {/* <form method="post" action="mailto:ryanschuttig@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/ryanschuttig/" className="icon fa-linkedin" target="_blank">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ryanschuttig" className="icon fa-github" target="_blank">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
