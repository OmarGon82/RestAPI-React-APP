import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import withContext from './Context'
import PrivateRoute from './PrivateRoute';

// Component Imports
import Header from './Components/Header';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import UpdateCourse from './Components/UpdateCourse'
import NotFound from './Components/NotFound';
import CreateCourse from './Components/CreateCourse';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
// import Authenticated from './Components/Authenticated';

//connect components to context
const HeaderWithContext = withContext(Header)
// const AuthWithContext = withContext(Authenticated);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CreateCourseWithContext = withContext(CreateCourse);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);

export default () => (

    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
          <Route exact path="/" component={CoursesWithContext}/>
          <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
          <PrivateRoute exact path="/courses/:id/update" component={UpdateCourseWithContext} />
          {/* <PrivateRoute path="/authenticated" component={AuthWithContext} /> */}
          <Route path="/courses/:id" component={CourseDetailWithContext} />
          <Route path="/signin"  component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
);

// / - Courses
// /courses/create - CreateCourse
// /courses/:id/update - UpdateCourse
// /courses/:id - CourseDetail
// /signin - UserSignIn
// /signup - UserSignUp
// /signout - UserSignOut