import React, { Component } from 'react';
import PostDetailDisplay from './PostDetailDisplay'
import {getProductInfo,deleteProduct} from '../../services/productServices'

class  PostDetailContainer extends Component {
  state={
    product:{},
    comment:{}
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
  
  submitCom=(e)=>{
    const{comment}= this.state
    deleteProduct('comment/new',comment)
    .then(comment=>{
      console.log(e)
    })
    .catch(e=>{console.log(e)})
  }

  componentWillMount(){
    const {id} = this.props.match.params
    this.getProductInfo(id)
  }

  getProductInfo=(id)=>{
    getProductInfo('post/'+id)
    .then(product=>{
      this.setState({product})
    })
    .catch(e=>console.log(e))
  }

  render() {
    const {product} = this.state
    return (
      <PostDetailDisplay
      product= {product}
      onChange={this.onChange}
      submitCom={this.submitCom}
      />
    )
  }
}

export default PostDetailContainer
