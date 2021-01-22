/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import AboutContent from "../contents/about.md"

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";


class AboutPage extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AboutContent).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return (
      <MDBContainer className="mt-5">
        <ReactMarkdown source={markdown} />
      </MDBContainer>
    );
  }
}

export default AboutPage;