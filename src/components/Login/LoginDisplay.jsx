import React from 'react'
import {Input,Button} from 'antd'


const LoginDisplay = ({onChange,onSubmit})=>{
  return(
    <form onSubmit={onSubmit} className='Loginform'>
    <h2>¡Ingresa a la plataforma!</h2>
    <p className='signup-input'>
      Email:
      <Input 
      name="email"
      type="email"
      onChange={onChange}
      placeholder="JonSnow@gmail.com" 
      />    
    </p> 
    <p className='signup-input'>
      Contraseña:
      <Input 
      name="password"
      type="password"
      onChange={onChange}
      placeholder="WinterIsComming" 
      />    
    </p>   
    <Button /*loading={loading}*/ type="primary" htmlType="submit" >¡Ingresa!</Button>
</form>
  )
}

export default LoginDisplay