import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import withContext from './Context'

// Component Imports
import Header from './Components/Header';
import Courses from './Components/Courses';
import NotFound from './Components/NotFound';
import CourseDetail from './Components/CourseDetail';
import UserSignUp from './Components/UserSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignOut from './Components/UserSignOut';
import Authenticated from './Components/Authenticated';
import PrivateRoute from './PrivateRoute';

//connect components to context
const HeaderWithContext = withContext(Header)
const AuthWithContext = withContext(Authenticated);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);

export default () => (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
          <Route exact path="/" component={CoursesWithContext}/>
          <PrivateRoute path="/authenticated" component={AuthWithContext} />
          <PrivateRoute path="/courses/:id" component={CourseDetailWithContext} />
          <Route path="/signin"  component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //   }
  // }
  
  // componentDidMount() {
  //   fetch('http://localhost:5000/api/courses')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json,
  //       })
  //     });
  // }
  // render() {
  //   const { isLoaded, items} = this.state;
  //   if(!isLoaded) {
  //     return <div>Loading...</div>;
  //   }
  //   else {
  //     return (
  //       <div >
  //         <h1>Results</h1>
  //           {items.map(item => (
  //             <div>
  //             <h1 className="course--header" key={item.id}>
  //               Course: {item.title}
  //             </h1>
  //             <h2>
  //               id:  {item.id}
  //             </h2>
  //             </div>
  //           ))}
  
  //       </div>  
  //     )
  //   }
  // }

)

