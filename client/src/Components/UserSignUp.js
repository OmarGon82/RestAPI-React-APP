// UserSignUp - This component provides the "Sign Up" screen by rendering a form that allows a user to sign up by creating a new account. 
// The component also renders a "Sign Up" button that when clicked sends a POST request to 
// the REST API's /api/users route and signs in the user. 
// This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: [],
    }

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            errors,
        } = this.state;

        return (
            <div className="bounds">
              <div className="grid-33 centered signin">
                  <h1>Sign Up</h1>
                  <Form
                    cancel={this.cancel}
                    errors={errors}
                    submit={this.submit}
                    submitButtonText="Sign Up"
                    elements={()=> (
                        <React.Fragment>
                            <input 
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={this.change}
                                placeholder="First Name" />
                            <input 
                              id="lastName"
                              name="lastName"
                              type="text"
                              value={lastName}
                              onChange={this.change}
                              placeholder="last Name" />
                            <input 
                              id="email" 
                              name="email" 
                              type="email"
                              value={emailAddress} 
                              onChange={this.change} 
                              placeholder="youremail@email.com" />
                            <input 
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.change}
                                placeholder="Password" />
                        </React.Fragment>
                    )} />
                    <p>
                      Already have a user account? <Link to="/signin">Click here</Link> to sign in!
                    </p>
              </div>
            </div>
        );
    }


    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState(() => {
            return {
                [name]: value
            };
        });
    }
    
    submit = () => {
      const { context } = this.props;
      const {
        firstName,
        lastName,
        emailAddress,
        password
      } = this.state;
      const user = {
        firstName,
        lastName,
        emailAddress,
        password
      };
      
      context.data.createUser(user)
        .then( errors => {
          if(errors.length) {
            this.setState({ errors });
          } else {
            console.log(`${emailAddress} is successfully signed up and authenticated!`);
            // context.actions.signIn(username, password)
            //   .then( () => {
            //     this.props.history.push('/authenticated')
            //   })
          }
        })
        .catch( err => { // handle rejected promises
          console.log(err)
          this.props.history.push('./error'); // Push to history stack
        })
    }

    cancel = () => {
      this.props.history.push('/')
    }
}



