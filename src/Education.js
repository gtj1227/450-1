import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2>{this.props.education.title}</h2>
        <div className="ed2">
        <div>
        <h3>{this.props.education.bsInstitution}</h3>
        <p>{this.props.education.bsDegree} ({this.props.education.bsDates})</p>
        <p>GPA: {this.props.education.bsGpa}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Education;
