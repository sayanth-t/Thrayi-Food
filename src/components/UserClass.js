import React from 'react';

class UserClass extends React.Component {

    constructor (props){
      super(props) ;
    } 

    state = {
      name  : ""
    }

    // for fetching data 
    async componentDidMount(){
      const data = await fetch('https://api.github.com/users/sayanth-t') ;
      const jsonData = await data.json() ;

      this.setState({ name : jsonData.login })
    }

   
  render() {

    const {name} = this.state ;

    return (
      <div className="user-card">

       <h3>{name}</h3>
        
      </div>
    );
  }
}


export default UserClass ;