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
// import UserSignIn from './Components/UserSignIn';

//connect components to context
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignUpWithContext = withContext(UserSignUp);
// const UserSignInWithContext = withContext(UserSignIn);

export default () => (

    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={CoursesWithContext}/>
          <Route path="/courses/:id" component={CourseDetailWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
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

