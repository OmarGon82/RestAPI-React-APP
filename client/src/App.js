import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// Component Imports
import Header from './Components/Header';

export default () => (

    <Router>
      <div>
        <Header />
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

