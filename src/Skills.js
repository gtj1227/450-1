import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>{this.props.keySkills.title}</h2>
        <ul>
          {this.props.keySkills.content.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
