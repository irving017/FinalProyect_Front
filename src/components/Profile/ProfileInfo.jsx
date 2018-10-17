import React, { Component } from 'react';
import {Card,CardContent,Typography,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions,Button} from '@material-ui/core'
import {editInfo, getUserData} from '../../services/userServices'

class Pruebita extends Component {
  state={
    user:{},
    open:false,
    open2:false,
    open3:false
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) this.props.history.push('/')
    getUserData('profile/post')
    .then(user=>{
      this.setState({user})
    })
    .catch(e=>console.log(e))
  }

  onChange=(e)=>{
    const field = e.target.name
    const value = e.target.value
    const {user} = this.state
    user[field]=value
    console.log(user)
    //this.setState={user}
  }

  onSubmit=(e)=>{
    //e.preventDefault()
    const {user} = this.state
    editInfo('editInfo',user)
    .then(user=>{
      this.setState({user})
    })
    .catch(e=>console.log(e))
  }
  handleClose=()=>{
    this.setState({open:false,open2:false, open3:false})
  }

  handleOpen=()=>{
    this.setState({open:true})
  }

  handleOpen2=()=>{
    this.setState({open2:true})
  }
  handleOpen3=()=>{
    this.setState({open3:true})
  }

  render() {
  const {user} = this.state
    return (
      <div className='div-info'>
        <Card className='card-info'>
        <CardContent>
        <Typography variant="h5" component="h3">
        Datos de contacto
        </Typography>
        <a onClick={this.handleOpen}>Modificar</a>
        <hr/>
        <div style={{display:'flex'}}>
          <div style={{textAlign:'left'}}>
          <p style={{fontWeight:900}}>Nombre completo:</p> 
          <p style={{fontWeight:900}}>Email:</p>
          <p style={{fontWeight:900}}>Telefono:</p>
          </div>
          <div style={{textAlign:'left',marginLeft:5}}>
          <p>{user.name} {user.lastname}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Dialog
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">Edita tu info</DialogTitle>
    <form onSubmit={this.onSubmit}>
    <DialogContent>
    <TextField
      autoFocus
      //margin="dense"
      name="name"
      label="Nombre"
      type="text"
      defaultValue={user.name}
      onChange={this.onChange}
      
    />
    <TextField
      autoFocus
      //margin="dense"
      name="lastname"
      label="Nombre"
      type="text"
      defaultValue={user.lastname}
      onChange={this.onChange}
    />
    <TextField
      autoFocus
      //margin="dense"
      name="email"
      label="Email"
      type="text"
      defaultValue={user.email}
      fullWidth
      onChange={this.onChange}
    />
    <TextField
      autoFocus
      //margin="dense"
      name="phone"
      label="Telefono"
      type="text"
      defaultValue={user.phone}
      fullWidth
      onChange={this.onChange}
    />
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleClose} color="secondary">
        Cancelar
      </Button>
      <Button type='submit' onClick={this.handleClose} color="primary">
        Editar
      </Button>
    </DialogActions>
    </form>
    </Dialog>
    

    <Card className='card-info'>
        <CardContent>
        <Typography variant="h5" component="h3">
        Metodo de pago
        </Typography>
        <a onClick={this.handleOpen2}>Modificar</a>
        <hr/>
        <div style={{display:'flex'}}>
          <div style={{textAlign:'right'}}>
          <p style={{fontWeight:900}}>Numero de tarjeta:</p>
          <p style={{fontWeight:900}}>Cuenta de PayPal:</p>
          </div>
          <div style={{textAlign:'left',marginLeft:5}}>
          <p>{user.paymethod}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Dialog
      open={this.state.open2}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">Edita tu info</DialogTitle>
    <form onSubmit={this.onSubmit}>
    <DialogContent>
    <TextField
      autoFocus
      //margin="dense"
      name="paymethod"
      label="Numero de tarjeta"
      type="text"
      defaultValue={user.paymethod}
      fullWidth
      onChange={this.onChange}
    />
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleClose} color="secondary">
        Cancelar
      </Button>
      <Button type='submit' onClick={this.handleClose} color="primary">
        Editar
      </Button>
    </DialogActions>
    </form>
    </Dialog>


    <Card className='card-info'>
        <CardContent>
        <Typography variant="h5" component="h3">
        Dirección de entrega
        </Typography>
        <a onClick={this.handleOpen3}>Modificar</a>
        <hr/>
        <div style={{display:'flex'}}>
          <div style={{textAlign:'right'}}>
          <p style={{fontWeight:900}}>Dirección:</p>
          </div>
          <div style={{textAlign:'left',marginLeft:5}}>
          <p>{user.address}</p>
          <p>{user.city}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    <Dialog
      open={this.state.open3}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">Edita tu info</DialogTitle>
    <form onSubmit={this.onSubmit}>
    <DialogContent>
    <TextField
      autoFocus
      //margin="dense"
      name="address"
      label="Dirección"
      type="text"
      defaultValue={user.address}
      fullWidth
      onChange={this.onChange}
    />
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleClose} color="secondary">
        Cancelar
      </Button>
      <Button type='submit' onClick={this.handleClose} color="primary">
        Editar
      </Button>
    </DialogActions>
    </form>
    </Dialog>
      </div>
    );
  }
}

export default Pruebita;
