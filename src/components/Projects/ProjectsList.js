
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProjects } from "./ProjectsActions";

import Project from "./Project";

class ProjectsList extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.projects;
    console.log(projects)

    if (projects.length === 0) {
      return <h2>Please add your first project</h2>;
    }

    let items = projects.map(project => {
        console.log(project)
      return <Project key={project.id} project={project} />;
    });

    return (
      <div>
        <h2>Projects</h2>
        {items}
        <hr />
      </div>
    );
  }
}

ProjectsList.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps, {
    getProjects
})(withRouter(ProjectsList));