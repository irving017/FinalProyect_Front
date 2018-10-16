import React from 'react'
import {TextField,Button,Chip} from '@material-ui/core'

const PostDetailDisplay = ({product,onChange,submitCom})=>{
  return(
    <div>
      <h2 style={{textAlign:'center',marginTop:'1%'}}>Detalles del producto</h2>
      <div className='detail-view'>
      <div style={{width:'70%', padding:'0 50px'}}>
        <h2>{product.title}</h2>
        <img style={{width:'70%'}} src={product.photoURL} alt="foto del producto"/>
        <h2>Descripción del producto</h2>
        <hr/>
        <p>{product.description}</p>
        <h2>Categoría</h2>
        <hr/>
        <Chip label={product.category} color="secondary" style={{marginBottom:'2%'}}/>
        <h2>Comentarios sobre el producto</h2>
        <hr/>
        <form>
        <TextField
          multiline
          name='content'
          rows="3"
          placeholder='Escribe aqui tu comentario...'
          className='comment-box'
          margin="normal"
          variant="filled"
          onChange={onChange}
        />
        <Button onClick={submitCom} variant="contained" size="medium" color="secondary" style={{marginTop:0,marginBottom:10,marginRight:0}}>Guardar comentario</Button>
        </form>
      </div>
      <div style={{width:'30%'}}>
        <div>
          <h2>Pedido</h2>
          <h3>${product.price} / día </h3>
          <form>
          <TextField
            id="date"
            label="fecha inicial"
            type="date"
            name='initDay'
            onChange={onChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="fecha final"
            type="date"
            name='lastDay'
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onChange}
          />
          <Button variant="contained" size="medium" color="secondary" style={{marginTop:10}}>
          Reserva
        </Button>
          </form>
        </div>
        <div>
          <h2>Usuario</h2>
          <h3>{product.user?product.user.name:''} {product.user?product.user.lastname:''}</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PostDetailDisplay 