import React, { Component } from 'react';
import axios from 'axios'

class ProfileNoti extends Component {
  state={
    notis:[]  
  }

componentWillMount(){
  this.getNotis()
}

getNotis=()=>{
  axios.get('http://localhost:3000/noti/all',{
    headers:{
    'authorizacion': localStorage.getItem('token')
    }
  })
  .then(res=>{
    console.log(res.data)
    this.setState({notis:res.data})
  })
  .catch(e=>console.log(e))
}
  render() {
    const {notis} = this.state
    return (
      <div>
        <p>Hola</p>
        {notis?notis.map((n,i)=><p>{n.post.title}</p>):''}
      </div>
    )
  }
}

export default ProfileNoti
