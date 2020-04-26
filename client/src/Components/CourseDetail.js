import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const ReactMarkdown = require('react-markdown');
export default class CourseDetail extends Component {
    constructor() {
        super();
        this.state = {
            course: {}
        }
    }

    async componentDidMount() {
        const { context } = this.props;
        const course = await context.data.getSingleCourse(this.props.match.params.id);
        if (course !== null) {
            this.setState(() => {
                return {
                    course,
                }
            })
        }
    }

  render() {
    const { course } = this.state;
    const firstName = ((course|| {}).user || {}).firstName;
    const lastName = ((course|| {}).user || {}).lastName;
   
    return (
      <div>
        <div className="actions--bar">
          <div className="bounds">
            <div className="grid-100">
              <Link className="button" to="/update-course">Update Course</Link>
              <Link className="button" to="/delete-course">Delete Course</Link>
              <Link className="button button-secondary" to="/">Return to list</Link>
            </div>
          </div>
        </div>
        <div className="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{course.title}</h3>
              <p>By {firstName} {lastName} </p>
            </div>
            <div className="course--description">
              <ReactMarkdown source={course.description} />
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{course.estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ReactMarkdown source={course.materialsNeeded} />
                </li>
              </ul>
            </div>
          </div>  
        </div>
      </div>    
    )
  }
}