import React, { Component } from 'react';
import AllProductsDisplay from './AllProductsDisplay'
import {getAllProducts} from '../../services/productServices'


class AllProductsContainer extends Component {
  state={
    products:[]
  }

  componentWillMount(){
    this.getAllProducts()
  }

  onChange=(e)=>{
      const key = e.target.name
      const value = e.target.value
      localStorage.setItem(key,value)
      getAllProducts(`post/allproducts/?category=${localStorage.getItem('cat')}`)
      .then(products=>{
        this.setState({products:products})
      })
      .catch(e=>console.log(e))
  }
  getAllProducts = ()=>{
    getAllProducts(`post/allproducts/?category=${localStorage.getItem('cat')}`)
    .then(products=>{
      this.setState({products:products})
    })
    .catch(e=>console.log(e))
  }

  showProducts = (e)=>{
    this.props.history.push(`/post/${e._id}`)
  }

  render() {
    const {products}=this.state
    return (
      <AllProductsDisplay
      products={products}
      showProducts={this.showProducts}
      onChange={this.onChange}
      />
    )
  }
}

export default AllProductsContainer
