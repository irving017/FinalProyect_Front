import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/Signup/SignupContainer'
import Login from './components/Login/LoginContainer'
import Profile from './components/Profile/ProfileContainer'
import Logout from './components/Logout/LogoutContainer'
import NewPostContainer from './components/Post/NewPostContainer'
import AllProductsContainer from './components/Post/AllProductsContainer'
import Home from './components/Post/Home'
import PostDetailContainer from './components/Post/PostDetailContainer'

const Routes = ()=>{
  return(
    <Switch>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/logout' component={Logout}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/post/new' component={NewPostContainer}></Route>
      <Route path='/post/allproducts' component={AllProductsContainer}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route path='/post/:id' component={PostDetailContainer}></Route>
    </Switch>
  )
}

export default Routes