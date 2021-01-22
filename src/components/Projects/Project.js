
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteProject, updateProject } from "./ProjectsActions";
import { Button } from "react-bootstrap";

class Project extends Component {
  onDeleteClick = () => {
    const { project } = this.props;
    this.props.deleteProject(project.id);
  };
  onUpperCaseClick = () => {
    const { project } = this.props;
    this.props.updateProject(project.id, {
      description: project.description.toUpperCase()
    });
  };
  onLowerCaseClick = () => {
    const { project } = this.props;
    this.props.updateProject(project.id, {
      description: project.description.toLowerCase()
    });
  };

  render() {
    const { project } = this.props;
    return (
      <div>
        <hr />
        <p>
          (id:{project.id}) {project.description}
        </p>
        <Button variant="secondary" size="sm" onClick={this.onUpperCaseClick}>
          Upper case
        </Button>{" "}
        <Button variant="info" size="sm" onClick={this.onLowerCaseClick}>
          Lower case
        </Button>{" "}
        <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
          Delete
        </Button>
      </div>
    );
  }
}

Project.propTypes = {
    project: PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteProject, updateProject })(
  withRouter(Project)
);