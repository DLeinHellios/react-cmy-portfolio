import React, { Component } from 'react';
import about from '../content/about.json';
import projects from '../content/projects.json';

class Content extends Component {
  renderAbout() {
    let textList = [];
    for(const text of about.text) {
      textList.push(<p key={text.indexOf}>{text}</p>);
    }
    let linkList = [];
    for(const link in about.links) {
      linkList.push(<button className="link-button" key={link} formAction={about.links[link]} formTarget="_blank">{link}</button>);
    }
    return (
      <>
        <div className='content-block'>
          <h2>About Me</h2>
          {textList}
        </div>
        <div className='content-block'>
          <h2>My Skills</h2>
          {about.skills.join(", ")}
        </div>
        <div className='content-block'>
          <h2>My Links</h2>
          <div className='project-container'>
            <form>
              {linkList}
            </form>
          </div>
        </div>
      </>
    )
  }

  renderProjects() {
    let projectList = [];
    for(const project of projects) {
      projectList.push(<button className='project-button' formAction={project.link} key={project.indexOf}>{project.name}</button>)
    }

    return (
      <div className='content-block'>
        <div className='project-container'>
          <form>
            {projectList}
          </form>
        </div>
      </div>
    )
  }

  renderContact() {
    return (
      <div className='content-block'>
        <form id="contact-form">
          <div className="contact-block">
            <label for="Name">Your name</label>
            <input type="text" id="Name" name="Name"  required />
          </div>
          <div class="contact-block">
            <label for="Email">Your email address</label>
            <input type="email" id="Email" name="Email"  required />
          </div>
          <div class="contact-block">
            <label for="Message">Your message</label>
            <textarea id="Message" name="Message"  rows="6" maxlength="3000" required></textarea>
          </div>
          <div class="contact-block">
              <button type="submit" id="submit-button">Send</button>
          </div>
        </form>
      </div>
    )
  }

  renderContent(page) {
    switch(page) {
      case 0:
        return this.renderAbout();

      case 1:
        return this.renderProjects();

      case 2:
        return this.renderContact();

      default:
        console.log("ERROR: Attempting to load unexpected page")
        break;
    }
  }

  render() {
    return (
      <div className='Content'>
        {this.renderContent(this.props.page)}
      </div>
    )
  }
}

export default Content;