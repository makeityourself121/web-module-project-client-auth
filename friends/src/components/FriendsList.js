import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

import NewFriends from './NewFriends'
class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res=> {
          console.log('friend', this.props)
        this.setState({
          friends: res.data
        })
      })
      .catch(err=> {
        console.log(err);
      });
  }
  render(){
      
      return(<div>
          {
              this.state.friends.map(friend=>(
                  <div key={friend.id} style={{ border:'2px solid black', margin:'20px 350px'}}>
                  <h1>Name: {friend.name}</h1>
                  <h3>Age: {friend.age}</h3>
                  <p>Email: {friend.email}</p>
                  </div>
              ))
          }
            <NewFriends />
      </div>)
  }
}
export default FriendsList