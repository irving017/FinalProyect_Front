import React from 'react'
import {Input,Button } from 'antd';

const SignupDisplay =({onChange,createUser})=> {

  return(
    <form onSubmit={createUser} className='signupform'>
    <h2>¡Crea tu cuenta!</h2>
    <div className='half'>
      <p>
        Nombre:
        <Input 
        name="name"
        type="text"
        onChange={onChange}
        placeholder="Jon" 
        />
      </p>
      <p>
        Apellido:
        <Input 
        name="lastname"
        type="text"
        onChange={onChange}
        placeholder="Snow" 
        />
      </p>
    </div>
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
    <p className='signup-input'>
      Confirmar Contraseña:
      <Input 
      name="password2"
      type="password"
      onChange={onChange}
      placeholder="WinterIsComming" 
      />    
    </p>   
    <Button /*loading={loading}*/ type="primary" htmlType="submit" >Registrarme</Button>
</form>
  )
}

export default SignupDisplay