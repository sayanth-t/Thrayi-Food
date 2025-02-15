import React from 'react';

class UserClass extends React.Component {

    constructor (props){
        super(props) 

        this.state = {
          count1 : 0 ,
          count2 : 10
        }

        console.log('hey from contructure...') ;
    }


    componentDidMount(){
      console.log('component did mount !!') ;
    }

    increaseCount = () => {
      this.setState( { count1 : this.state.count1 + 1 } )
    }

    decreaseCount = () => {
      this.setState( { count1 : this.state.count1 - 1 } )
    }

    increaseCount1 = () => {
      this.setState( { count2 : this.state.count2 + 1 } )
    }

    decreaseCount1 = () => {
      this.setState( { count2 : this.state.count2 - 1 } )
    }

  render() {

    console.log('hey from renderrr')
    const {count1,count2} = this.state ;

    return (
      <div className="user-card">

        <h4>First count value = {count1} </h4>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>

        <h4>Second count value = {count2} </h4>
        <button onClick={this.increaseCount1}>Increase</button>
        <button onClick={this.decreaseCount1}>Decrease</button>
        
      </div>
    );
  }
}


export default UserClass ;