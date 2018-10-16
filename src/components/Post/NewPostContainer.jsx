import React, { Component } from 'react'
import NewPostDisplay from './NewPostDisplay'
import toastr from 'toastr'
import axios from 'axios'

const url = 'https://forrent.herokuapp.com/post/new'

class NewPostContainer extends Component {
  
  state={
    post:{}
  }

  onChange = (e)=>{
    const field = e.target.name
    const value = e.target.value
    const {post} = this.state
    post[field]=value
    console.log(post)
    this.setState={post}
  }

  createPost = (e)=>{
    e.preventDefault()
    const {post} = this.state
    if(post.title === undefined || post.description === undefined || post.price === undefined || post.category === undefined){
      return toastr.error('Te falto rellenar un campo')
    }
    const form = new FormData()
    for(let key in post){
      form.append(key,post[key])
    }
    axios.post(url, form, {
      headers:{
        "authorizacion":localStorage.getItem('token')
      }
    })
    .then(res=>{
      this.props.history.push('/post/allproducts')
    })
    .catch(e=>toastr.error('No se pudo guardar tu publicación'))
  }

  upLoad=(e)=>{
    //console.log(e.target.files)
    const field = 'photo'
    const value = e.target.files[0]
    const {post} = this.state
    post[field]=value
    this.setState={post}

  }

  render() {
    return (
      <NewPostDisplay
      createPost={this.createPost}
      onChange={this.onChange}
      upLoad={this.upLoad}
      />
    )
  }
}

export default NewPostContainer
