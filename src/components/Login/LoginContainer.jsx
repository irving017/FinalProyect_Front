import React from 'react'
import axios from 'axios'
import toastr from 'toastr'
import LoginDisplay from './LoginDisplay'
import './Login.css'

const url = 'https://forrent.herokuapp.com/login'

class LoginContainer extends React.Component{
  state={
    user:{}
  }
  
  componentWillMount(){
    const token = localStorage.getItem('token')
    if(token)this.props.history.push('/')
  }

  onSubmit = (e)=>{
    e.preventDefault()
    const {user} = this.state
    if(user.email === undefined || user.password === undefined){
      return toastr.error('Te falto rellenar un campo')
    }
    axios.post(url,user)
    .then(res=>{
      console.log(res)
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('user',JSON.stringify(res.data.user))
      this.props.history.push('/')
    })
  }

  onChange = (e)=>{
    const value = e.target.value
    const key = e.target.name
    const {user} = this.state
    user[key] = value
    console.log(user)
    this.setState({user})
  }

  render(){
    return(
      <LoginDisplay
      onChange= {this.onChange}
      onSubmit={this.onSubmit}
      />
    )
  }
}

export default LoginContainer