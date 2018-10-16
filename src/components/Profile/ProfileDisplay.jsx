import React from 'react'
import {Drawer,Divider,List,Typography, ListItem,ListItemText,ListItemIcon} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import UserRoutes from './UserRoutes'
import {NavLink} from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send'



const ProfileDisplay = ()=>{
  
  return(
    <div style={{display:'flex'}}>
    <List>
    <NavLink to='/profile/info' className='link'><ListItem button>
      <ListItemIcon>
        <AccountCircle/>
      </ListItemIcon>
      <ListItemText primary="Mi info" />
      </ListItem>
      </NavLink>
      <NavLink to='/profile/post' className='link'><ListItem button>
      <ListItemIcon>
        <InboxIcon/>
      </ListItemIcon>
      <ListItemText primary="Publicaciones" />
      </ListItem>
      </NavLink>
      <ListItem button>
      <ListItemIcon>
        <SendIcon/>
      </ListItemIcon>
      <ListItemText primary="Mensajes" />
      </ListItem>
    </List>
    <UserRoutes/>
    </div>
  )
}

export default ProfileDisplay