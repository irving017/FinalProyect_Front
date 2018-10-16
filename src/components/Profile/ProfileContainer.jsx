import React from 'react'
import ProfileDisplay from './ProfileDisplay'
import axios from 'axios'
import './Profile.css'

class ProfileContainer extends React.Component{

  state={
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) this.props.history.push('/')
    this.setState({user})
  }

  getPrivateInfo = ()=>{
    axios.get('https://forrent.herokuapp.com/profile',{
        headers:{
        'authorizacion':localStorage.getItem('token')
        }
    })
    .then(res=>{
        console.log(res)
    })
  }
  
  render(){
    const {user} = this.state
    return(
      <ProfileDisplay
      />
    )
  }
}

export default ProfileContainer
