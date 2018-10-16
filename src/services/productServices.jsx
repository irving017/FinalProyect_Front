import axios from 'axios'

const url = 'http://localhost:3000/'

export const getAllProducts = (ext)=>{
  return axios.get(url+ext)
  .then(res=>{
    return res.data
  })
  .catch(e=>{
    return e
  })
}

export const getProductInfo = (ext)=>{
  return axios.get(url+ext)
  .then(res=>{
    return res.data
  })
  .catch(e=>{
    return e
  })
}

export const deleteProduct = (ext,post)=>{
  return axios.post(url+ext,post,{
    headers:{
    'authorizacion': localStorage.getItem('token')
  }
})
  .then(res=>{
    return res.data
  })
  .catch(e=>{
    return e
  })
}