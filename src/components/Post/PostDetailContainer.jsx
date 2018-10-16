import React, { Component } from 'react';
import PostDetailDisplay from './PostDetailDisplay'
import {getProductInfo,deleteProduct} from '../../services/productServices'
import {getComments} from '../../services/commentServices'

class  PostDetailContainer extends Component {
  state={
    product:{},
    comment:{},
    comments:[]
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

  render() {
    const {product,comments} = this.state
    return (
      <PostDetailDisplay
      product= {product}
      comments={comments}
      onChange={this.onChange}
      submitCom={this.submitCom}
      />
    )
  }
}

export default PostDetailContainer
