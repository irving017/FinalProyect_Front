import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes' 
import {AppBar,IconButton,Typography,Toolbar,Button,MenuItem,Menu} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom'

class App extends Component {

  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  
  render() {
  const token = localStorage.getItem('token') 
  const {anchorEl} = this.state
  const open = Boolean(anchorEl)

  return (
      <div>
        <AppBar position="static">
        <Toolbar className='toolbar'>
          <NavLink to='/' className='link'>
          <Typography variant="h6" color="inherit">
            4Rent
          </Typography>
          </NavLink> 
          {!token? <div>
          <NavLink to='/signup' className='link'><Button color="inherit">¡Registrate!</Button></NavLink>
          <NavLink to='/login' className='link'><Button color="inherit">Ingresa</Button></NavLink>
          </div> :<div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle                  
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <NavLink to='/profile/info' className='link'><MenuItem onClick={this.handleClose}>Perfil</MenuItem></NavLink>
                  <NavLink to='/logout' ><MenuItem onClick={this.handleClose}>Cerrar sesión</MenuItem></NavLink>
                </Menu>
                <NavLink to='/post/new' className='link'><Button variant='contained' style={{backgroundColor:'white',color:'#FF0000',border:'1px solid #FF0000'}}>Alquila algo</Button></NavLink>
              </div>}
        </Toolbar>
      </AppBar>
      <Routes/>
      </div>
    );
  }
}

export default App;
