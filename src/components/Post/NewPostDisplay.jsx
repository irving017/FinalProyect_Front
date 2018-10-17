import React from 'react'
import {Button,TextField} from '@material-ui/core'
import './Post.css'

const NewPostdisplay = ({createPost,onChange,upLoad})=>{
  return (
    <div>
      <form onSubmit={createPost} className='Postform'>
      <h2>¿Qué deseas poner en renta?</h2>
      <p>
      <TextField
        label="Título"
        name='title'
        variant="outlined"
        onChange={onChange}
        style={{width:'90%'}}
      />
      </p>
      <p>
      <TextField
        label="Descripción"
        multiline
        rows="4"
        name='description'
        variant="outlined"
        onChange={onChange}
        style={{width:'90%'}}
      />
      </p>
      <p>
      <TextField
        label="Precio por día"
        name='price'
        variant="outlined"
        type='number'
        onChange={onChange}
        style={{width:'90%'}}
      />
      </p>
      <input
        accept="image/*"
        style={{display:'none'}}
        id="contained-button-file"
        multiple
        type="file"
        onChange={upLoad}
      />
      <p>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" style={{backgroundColor:'white',color:'#FF0000',border:'1px solid #FF0000'}}>
          Sube fotos de tu producto!
        </Button>
      </label>
      </p>
      <p>
      <TextField
        select
        label="Categoría"
        name='category'
        SelectProps={{
          native: true 
        }}
        helperText="Por favor selecciona tu categoría"
        variant="outlined"
        onChange={onChange}
        style={{width:'90%'}}
      >
      <option value='Audio y musica'>Audio y musica</option>
      <option value='Video'>Video</option>
      <option value='Deportes'>Deportes</option>
      <option value='Herramientas'>Herramientas</option>
      <option value='Fiestas'>Fiestas</option>
      <option value='Campamento y Excursion'>Campamento y Excursión</option>
      </TextField>
      </p>
      <Button variant='contained' type='submit' style={{backgroundColor:'#FF0000',color:'white'}}>¡Alquila!</Button>
      </form>
    </div>
  )
}
export default NewPostdisplay
