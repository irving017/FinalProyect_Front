import axios from 'axios'

const url = 'http://localhost:3000/'
//const url = 'https://forrent.herokuapp.com/'

export const getComments =(ext)=>{
    return axios.get(url+ext)
  .then(res=>{
    return res.data
  })
  .catch(e=>{
    return e
  })
}