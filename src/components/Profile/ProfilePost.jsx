import React, { Component } from 'react';
import {getUserData} from '../../services/userServices'
import {deleteProduct} from '../../services/productServices'
import toastr from 'toastr'
import {Card,CardContent,CardActionArea,CardMedia,Avatar, Dialog, DialogTitle,DialogContent,DialogContentText,Button} from '@material-ui/core'

class ProfilePost extends Component {
  
  state={
    user:{},
    open:false,
    cProduct:{}
  }

  componentWillMount(){
    this.getUserData()
  }

  handleOpen = (p)=>{
    this.setState({open:true,cProduct:p})
  }


  handleClose = () => {
    this.setState({ open: false })
  }

  getUserData =()=>{
    getUserData('profile/post') // esto es un servicio
    .then(user=>{
      console.log(user)
      this.setState({user})
    })
    .catch(e=>toastr.error('no se logro obtener las info del usuario'))
  }
  
  showProducts = (p)=>{
    this.props.history.push(`/post/${p._id}`)
  }

  deleteProduct = (p)=>{
    deleteProduct(`delete/${p._id}`)
    .then(post=>{
      this.getUserData()
     // this.props.history.push('/profile/post')
     
    })
    .catch(e=>console.log(e))
  }

  render() {
    const {user, open, cProduct}=this.state
    return (
      <div>
      <h2>Prodcutos publicados</h2>
      <div className='profile-cards'>
      {user.post ? user.post.map((p,i)=>(
        <Card key={i} style={{width:'20%',marginLeft:'3%', marginTop:'5%'}}>
        <CardActionArea onClick={()=>this.showProducts(p)}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={p.photoURL}
            title="Contemplative Reptile"
            style={{width:'100%'}}
          />
          <CardContent>
            <Avatar aria-label="Recipe">
              R
            </Avatar>
            <p>{p.title}</p>
            <p>${p.price} por día</p>          
          </CardContent>
        </CardActionArea>
        <Button onClick={()=>this.deleteProduct(p)} variant="contained" size="small" color='secondary' style={{marginBottom:10,marginTop:0}}>Eliminar</Button>
      </Card>
      )) : ""}
        <Dialog
          open={open}
          onClose={this.handleClose}
        >
        <DialogTitle>
        <DialogContentText
        variant='h5'
        >
        {cProduct.title}
        </DialogContentText>
        <DialogContentText variant='h6'>
        ${cProduct.price} por día
        </DialogContentText>
        </DialogTitle>
          <DialogContent>
            <img src={cProduct.photoURL} style={{width:'40vw'}}/>
            <DialogContentText>
            {cProduct.description}
            </DialogContentText>
          </DialogContent>
        </Dialog>
        </div>
    </div>
    )
  }
}

export default ProfilePost;
