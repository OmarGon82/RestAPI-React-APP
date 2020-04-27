// UpdateCourse - This component provides the "Update Course" screen by rendering a form that allows
// a user to update one of their existing courses. 
// The component also renders an "Update Course" button that when clicked sends a PUT request to 
// the REST API's /api/courses/:id route. This component also renders a "Cancel" button that returns the user to the "Course Detail" screen
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Form from './Form';


export default class UpdateCourse extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: '',
      description: '',
      estimatedTime: '',
      materialsNeeded: '',
      userId: null,
      errors: [],
    }
}

async componentDidMount() {
    const { context } = this.props;
    const authUser = context.authenticatedUser

    context.data.getSingleCourse(this.props.match.params.id)
     .then(course => {
       if (course) {
        //  console.log(course)
        //  console.log("this is the authUser id: ", authUser.id, "this is the course user id: ", course.user.id)
           if(course.user.id === authUser.id) {
             this.setState({
               id: course.id,
               title: course.title,
               description: course.description,
               estimatedTime: course.estimatedTime,
               materialsNeeded: course.materialsNeeded,
               userId: course.userId
            });
          } else {
            console.log("You can't edit this course because you don't own it")
            this.props.history.push(`/courses/${course.id}`)
          }
        }
     })
     .catch(err => {
       console.log("this is the catch error: ",err)
     })
  }

  render() {
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      errors
    } = this.state;
    return(
    <div className="bounds course--detail">
      <h1>Update Course</h1>
      <Form 
        cancel={this.cancel}
        errors={errors}
        submit={this.submit}
        submitButtonText="Update Course"
        elements={() => (
          <React.Fragment>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                  <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    className="input-title course--title--input" 
                    placeholder="Course title..."
                    value={title}
                    onChange={this.change}
                    /> 
                  </div>
                <p>By {this.props.context.authenticatedUser.firstName} {this.props.context.authenticatedUser.lastName}</p>
              </div>
              <div className="course--description">
                <div>
                  <textarea 
                    id="description" 
                    name="description"
                    type="text" 
                    className="" 
                    placeholder="Course description..."
                    value={description}
                    onChange={this.change} 
                  />
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                      <input 
                        id="estimatedTime" 
                        name="estimatedTime" 
                        type="text" 
                        className="course--time--input"
                        placeholder="Hours" 
                        value={estimatedTime || ''}
                        onChange={this.change}
                        />
                      </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                    <textarea 
                      id="materialsNeeded" 
                      name="materialsNeeded" 
                      className="" 
                      placeholder="List materials..."
                      value={materialsNeeded || ''}
                      onChange={this.change} 
                      />
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </React.Fragment>
        )}/> 
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
    const authUser = context.authenticatedUser;

    const {
      id,
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId,
    } = this.state;

    const course = {
      id,
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId,
    };
    const emailAddress = authUser.emailAddress
    const password = authUser.password

    context.data.updateCourse(course, emailAddress, password)
      .then(errors => {
        console.log("these are the errors",errors)
        if(errors.length) {
          this.setState({ errors });
        } else {
          console.log(`The course: ${title} was successfully updated`)
          this.props.history.push('/')
        }
      })
      .catch( err => {
      console.log("submit catch error", err)
      this.props.history.push('/error')
      })
  }
  cancel = () => {
    this.props.history.push(`/courses/${this.props.match.params.id}`)
  }



}