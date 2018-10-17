import React, { Component } from 'react';
import PostDetailDisplay from './PostDetailDisplay'
import {getProductInfo,deleteProduct} from '../../services/productServices'
import {getComments} from '../../services/commentServices'
import axios from 'axios'
import toastr from 'toastr'

class  PostDetailContainer extends Component {
  state={
    product:{},
    comment:{},
    comments:[],
    noti:{}
  }

  onChange=(e)=>{
    console.log(e.target.value)
    const value= e.target.value
    const key = e.target.name
    const {comment} = this.state
    const {product} = this.state
    comment[key]=value
    comment['post']=product._id
    comment['userpost']=product.user._id
    console.log(comment)
    this.setState({comment})
  }
  onChange2=(e)=>{
    console.log(e.target.value)
    const value= e.target.value
    const key = e.target.name
    const {noti} = this.state
    const {product} = this.state
    noti[key]=value
    noti['post']=product._id
    noti['userpost']=product.user._id
    console.log(noti)
    this.setState({noti})
  }
  componentWillMount(){
    const {id} = this.props.match.params
    this.getProductInfo(id)
    this.getComments(id)
  }

  submitCom=()=>{
    const{comment}= this.state
    deleteProduct('comment/new',comment)
    .then(product=>{
      this.getProductInfo(product._id)
      this.getComments(product._id)
    })
    .catch(e=>{console.log(e)})
  }

  getComments = (id)=>{
    getComments(`comment/all/${id}`)
    .then(comments=>{
      this.setState({comments})
    })
    .then(e=>console.log(e))
  }

  getProductInfo=(id)=>{
    getProductInfo('post/'+id)
    .then(product=>{
      this.setState({product})
    })
    .catch(e=>console.log(e))
  }

  newNoti=(e)=>{
    e.preventDefault()
    const {noti}=this.state
    if(noti.initDay === undefined || noti.lastDay === undefined){
      return toastr.error('Te falto rellenar un campo')
    }
    axios.post('http://localhost:3000/noti/new',noti,{
      headers:{
      'authorizacion': localStorage.getItem('token')
      }
    })
    .then(res=>{
      toastr.success('Tu solicutud fue completada con exito')
    })
    .catch(e=>toastr.error('No se pudo completar tu solicitud'))
  }

  render() {
    const {product,comments} = this.state
    return (
      <PostDetailDisplay
      product= {product}
      comments={comments}
      onChange={this.onChange}
      onChange2={this.onChange2}
      submitCom={this.submitCom}
      newNoti={this.newNoti}

      />
    )
  }
}

export default PostDetailContainer
