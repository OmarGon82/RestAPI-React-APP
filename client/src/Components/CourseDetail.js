// CourseDetail - This component provides the "Course Detail" screen by retrieving the detail 
// for a course from the REST API's /api/courses/:id route and rendering the course. 
// The component also renders a "Delete Course" button that when clicked should send a DELETE request to 
// the REST API's /api/courses/:id route in order to delete a course. 
// This component also renders an "Update Course" button for navigating to the "Update Course" screen.
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class CourseDetail extends Component {
    constructor() {
        super();
        this.state = {
            course: {},
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
        return (
               
            <div>{course.title} {course.id}</div>

            )
    }
}