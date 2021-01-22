import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addProject } from "./ProjectsActions";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        description: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const project = {
        name: this.state.name,
        description: this.state.description
    };
    this.props.addProject(project);
  };

  render() {
    return (
      <div>
        <h2>Add new project</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              as="input"
              name="name"
              placeholder="Enter project name"
              value={this.name}
              onChange={this.onChange}
            />
             <Form.Label>Project</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Enter project"
              value={this.description}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add project
        </Button>
      </div>
    );
  }
}

AddProject.propTypes = {
    addProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addProject })(withRouter(AddProject));