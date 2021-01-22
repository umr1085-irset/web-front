import React, { Component } from "react";
import { withRouter } from "react-router-dom";  // new import 
import { connect } from "react-redux";          // new import 
import PropTypes from "prop-types";             // new import 
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { toast } from "react-toastify";
import { resetPassword } from "../components/ResetPassword/ResetPasswordAction"

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: "",
            token: "",
            new_password: "",
            new_password_valid: " "
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onResetClick = () => {
        console.log("onResetClick")
        if (this.state.new_password !== this.state.new_password_valid){
            toast.error(
                "Passwords don't match"
            );
        } else{
            const userData = {
                uid: this.props.match.params.uid,
                token: this.props.match.params.token,
                new_password: this.state.new_password
            };
            this.props.resetPassword(userData, "/app/login"); // <--- activation request
        }
        
    };

    render() {
        return (
                <MDBContainer className="mt-5">
                    <MDBRow>
                    <MDBCol md="6">
                        <form>
                        <p className="h5 text-center mb-4">Reset your password</p>
                        <div className="grey-text">
                            <MDBInput label="Your password" icon="lock" group type="password" name="new_password" onChange={this.onChange} value={this.state.new_password} validate />
                            <MDBInput label="Confirm your password" icon="lock" group type="password" name="new_password_valid" onChange={this.onChange} value={this.state.new_password_valid} validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" onClick={this.onResetClick} >Reset password</MDBBtn>
                        </div>
                        </form>
                    </MDBCol>
                    </MDBRow>
            </MDBContainer>

        );
    }
  }

// connect action and store and component
ResetPassword.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, {
    resetPassword
  })(withRouter(ResetPassword));