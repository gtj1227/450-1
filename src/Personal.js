import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <div className="profile">
        <h2>{this.props.profile.title}</h2>
        <div className="profile2">
        <p>{this.props.profile.content}</p>
        </div>
      </div>
    );
  }
}

export default Personal;
