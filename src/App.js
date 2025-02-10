import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './Personal';
import WorkExperience from './Work';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "George Jereos",
        occupation: "Software Engineer"
      },
      contactInfo: {
        email: "GJ@example.com",
        web: "GJ.github.io",
        mobile: "123-456-7890"
      },
      profile: {
        title: "Personal Profile",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      workExperience: {
        title: "Work Experience",
        job1: "Job Title at Company (August 2022 – December 2023)",
        job1Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        job2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        job2Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      keySkills: {
        title: "Key Skills",
        content: ["A Key Skill", "A Key Skill", "A Key Skill", "A Key Skill", "A Key Skill", "A Key Skill", "A Key Skill", "A Key Skill", "A Key Skill"]
      },
      education: {
        title: "Education",
        bsInstitution: "AAA University",
        bsDegree: "B.S. Computer Science",
        bsDates: "2019 - 2023",
        bsGpa: "3.8"
      }
    };
  }

  render() {
    return (
      <div className="container">
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo} />
        <PersonalProfile profile={this.state.profile} />
        <WorkExperience workExperience={this.state.workExperience} />
        <Skills keySkills={this.state.keySkills} />
        <Education education={this.state.education} />
      </div>
    );
  }
}

export default App;
