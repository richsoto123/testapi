import React, {Component} from 'react'
// Initiates
class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  //mount (first rendor)
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        isLoaded: true,
        items: data, 
      });
    });

  }
  
  render(){
    var{ isLoaded, items} = this.state;
    if (!isLoaded){
      return <div>Loading....</div>;
    } else{
      return (
      <div className = "App">
        <div ClassName="Names">
          <ul>
            {items.map(el=>{
              return (
                <li Key = {el.id}>
                  Name: {el.name} | UserName: {el.username} | Email: {el.email} | Phone: {el.phone} | {'  '}
                  <a href={`https://${el.website}`}>Website</a>
                 </li>
              );
            })}
          </ul>
        </div>
      </div>
     );
    }
  } 
}

export default App;
