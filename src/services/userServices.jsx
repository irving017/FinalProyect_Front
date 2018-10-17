import axios from 'axios'

//const url = 'http://localhost:3000/'
const url = 'https://forrent.herokuapp.com/'

export const getUserData = (ext) => {
    return axios.get(url+ext,{
      headers:{
        'authorizacion': localStorage.getItem('token')
      }
    })
    .then(res=>{
        return res.data
    })
    .catch(e=>e)
}

export const editInfo = (ext,user)=>{
  return axios.post(url+ext,user,{
    headers:{
      'authorizacion': localStorage.getItem('token')
    }
  })
  .then(res=>{
    return res.data
  })
  .catch(e=>e)
}

// export const uploadPic = (file) => {
//     const form = new FormData
//     form.append('file', file)
//     const token = localStorage.getItem('token')
//     return axios.post(url + 'pictures/', form, {
//         headers:{
//             "Authorization":token
//         }
//     })
//     .then(picture=>picture)
//     .catch(e=>e)
// }