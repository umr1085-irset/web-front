import React, { Component } from "react";
import { withRouter } from "react-router-dom";  // new import 
import { connect } from "react-redux";          // new import 
import PropTypes from "prop-types";             // new import 
import { MDBBtn, MDBContainer } from "mdbreact";
import { activateNewUser } from "../components/Signup/ActivationActions"

class ActivationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: "",
            token: ""
        };
    }
    onActivateClick = () => {
        const userData = {
          uid: this.props.match.params.uid,
          token: this.props.match.params.token
        };
        this.props.activateNewUser(userData, "/app/login"); // <--- activation request
    };

    render() {
        return (
            <>
            <MDBContainer className="mt-5">
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Activate your account
                    </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        uid : {this.props.match.params.uid}
                    </p>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        token : {this.props.match.params.token}
                    </p>
                    <MDBBtn  onClick={this.onActivateClick}>Activate</MDBBtn>
                </section>
            </MDBContainer>
            </>
        );
    }
  }

// connect action and store and component
ActivationPage.propTypes = {
    activateNewUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {
    activateNewUser
  })(withRouter(ActivationPage));