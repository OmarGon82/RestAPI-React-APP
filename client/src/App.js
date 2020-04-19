import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  render() {
    const { isLoaded, items} = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
            {items.map(item => (
              <div key={item.id}>
                Course: {item.title}
                id:  {item.id}
              </div>
            ))}
  
        </div>  
      )
    }
  }

}

export default App;
