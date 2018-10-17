import React, { Component } from 'react';
import axios from 'axios'

class ProfileNoti extends Component {
  state={
    notis:[],
    comments:[]  
  }

componentWillMount(){
  this.getNotis()
  this.getComments()
}

getNotis=()=>{
  axios.get('https://forrent.herokuapp.com/noti/all',{
    headers:{
    'authorizacion': localStorage.getItem('token')
    }
  })
  .then(res=>{
    this.setState({notis:res.data})
  })
  .catch(e=>console.log(e))
}

getComments=()=>{
  axios.get('https://forrent.herokuapp.com/comment/user',{
    headers:{
    'authorizacion': localStorage.getItem('token')
    }
  })
  .then(res=>{
    this.setState({comments:res.data})
  })
  .catch(e=>console.log(e))
}
  render() {
    const {notis,comments} = this.state
    return (
      <div>
        <div className='profile-noti'>
        <div>
        <h3 style={{color:'red', fontWeight:900, fontSize:'1.2em'}}>Notificaciones</h3>
        {notis?notis.map((n,i)=>
        <div key={i} className='not-card'>
          <div style={{padding:20}}>
            <p style={{fontWeight:900}}>Nombre del producto:</p>
            <p style={{fontWeight:900}}>Nombre del interesado:</p>
            <p style={{fontWeight:900}}>Contacto:</p>
            <p style={{fontWeight:900}}>Fecha inicial:</p>
            <p style={{fontWeight:900}}>Fecha final:</p>
          </div>
          <div style={{marginLeft:10,padding:20}}>
            <p>{n.post.title}</p>
            <p>{n.owner.name} {n.owner.lastname}</p>
            <p>{n.phone}</p>
            <p>{n.initDay}</p>
            <p>{n.lastDay}</p>
          </div>
        </div>):''}
        </div>
        <div style={{marginLeft:50}}>
        <h3 style={{color:'red', fontWeight:900, fontSize:'1.2em'}}>Comentarios en publicaciones</h3>
        {comments?comments.map((c,i)=>
        <div key={i} className='not-card'>
          <div style={{padding:20}}>
            <p style={{fontWeight:900}}>Nombre del producto:</p>
            <p style={{fontWeight:900}}>Usuario del comentario:</p>
            <p style={{fontWeight:900}}>Contenido:</p>
            
          </div>
          <div style={{marginLeft:10,padding:20}}>
            <p>{c.post.title}</p>
            <p>{c.owner.name} {c.owner.lastname}</p>
            <p>{c.content}</p>
          </div>
        </div>):''}
        </div>
        </div>
      </div>
    )
  }
}

export default ProfileNoti
