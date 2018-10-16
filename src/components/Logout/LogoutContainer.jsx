import React, {Fragment} from 'react'

class LogoutContainer extends React.Component{
  componentWillMount(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.props.history.push('/')
  }
  render(){
    return(
      <></>
    )
  }
}

export default LogoutContainer