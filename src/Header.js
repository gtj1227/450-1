import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header1">
          <div>
          <h1>{this.props.personInfo.name}</h1>
          <h2>{this.props.personInfo.occupation}</h2>
        </div>
        </div>
        <div classname="header2">
          <div>
          <p>Email: <a href={`mailto:${this.props.contactInfo.email}`}>{this.props.contactInfo.email}</a></p>
          <p>Web: <a href={`https://${this.props.contactInfo.web}`}>{this.props.contactInfo.web}</a></p>
          <p>Mobile: {this.props.contactInfo.mobile}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
