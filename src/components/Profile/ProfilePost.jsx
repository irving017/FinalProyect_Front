import React, { Component } from 'react';
import {getUserData} from '../../services/userServices'
import {deleteProduct} from '../../services/productServices'
import toastr from 'toastr'
import {Card,CardContent,CardActionArea,CardMedia,Avatar,Button,Grid} from '@material-ui/core'

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
      <div className='profile-cards'>
      <Grid container spacing={Number(16)}>
      {user.post ? user.post.map((p,i)=>(
        <Grid key={i} item>
        <Card style={{width:'200px',marginLeft:'3%', marginTop:'5%',height:'350px'}}>
        <CardActionArea onClick={()=>this.showProducts(p)}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={p.photoURL}
            title="Contemplative Reptile"
            style={{width:'100%'}}
          />
          <CardContent style={{display:'flex'}}>
            <div>
            <Avatar aria-label="Recipe">
              R
            </Avatar>
            </div>
            <div style={{marginLeft:'10%',marginBottom:0}}>
            <p style={{color:'blue',fontWeight:900}}>{p.title}</p>
            <p style={{color:'black',fontWeight:900}}>${p.price} por día</p>
            </div>          
          </CardContent>
        </CardActionArea>
        <Button onClick={()=>this.deleteProduct(p)} variant="contained" size="small" style={{marginBottom:10,marginTop:0,backgroundColor:'white',color:'#FF0000',border:'1px solid #FF0000'}}>Eliminar</Button>
      </Card>
      </Grid>
      )) : ""}
      </Grid>
        </div>
    </div>
    )
  }
}

export default ProfilePost;
