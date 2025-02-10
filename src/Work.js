import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div className="work-experience">
        <div className="work">
            <div>
        <h2>{this.props.workExperience.title}</h2>
        </div>
        </div>
        <div className="work2">
        <div>
        <h3>{this.props.workExperience.job1}</h3>
        <p>{this.props.workExperience.job1Content}</p>
        <h3>{this.props.workExperience.job2}</h3>
        <p>{this.props.workExperience.job2Content}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Work;
