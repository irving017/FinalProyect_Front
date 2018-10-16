import React from 'react'
import './Signup.css'
import axios from 'axios'
import toastr from 'toastr'
import SignupDisplay from './SignupDisplay'

const url = 'https://forrent.herokuapp.com/signup'

class SignupContainer extends React.Component{

  state = {
    user:{}
  }
  
  onChange = (e)=>{
    const field = e.target.name
    const value = e.target.value
    const {user} = this.state
    user[field]=value
    console.log(user)
    this.setState={user}
  }
  
  createUser = (e) => {
    e.preventDefault()
    const {user} = this.state
    if(user.password !== user.password2) {
      return toastr.error('Las contraseña no coiciden')
    }
    if(user.name === undefined || user.lastname === undefined || user.email === undefined || user.password === undefined){
      return toastr.error('Te falto rellenar un campo')
    }
    axios.post(url, user)
    .then(res=>{
      this.props.history.push('/')
    })
  }
  render(){
    return(
      <SignupDisplay
      onChange={this.onChange}
      createUser = {this.createUser}
      />
    )
  }
}

export default SignupContainer