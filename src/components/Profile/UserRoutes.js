import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Info from './ProfileInfo'
import Post from './ProfilePost'
import Noti from './ProfileNoti'

const UseRoutes = ()=>{
  return(
    <Switch>
     <Route path={'/profile/info'} component={Info}/>
     <Route path={'/profile/post'} component={Post}/>
     <Route path={'/profile/noti'} component={Noti}/>
    </Switch>
  )
}

export default UseRoutes