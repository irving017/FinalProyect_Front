import React, { Component } from 'react';
import {Button,TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

class Home extends Component {
  
  onClick=()=>{
    this.props.history.push('/post/allproducts')
  }

  onChange=(e)=>{
    const key = e.target.name
    const value = e.target.value
    localStorage.setItem(key,value)
  }

  render() {
    return (
    <div>
      <div className='home-img'>
        <div className='home-search'>
          <h1 style={{fontWeight:900, fontSize:'3em',color:'white'}}>El lugar para rentar cualquier cosa</h1>
            <TextField
            select
            label="Categorias"
            name='category'
            SelectProps={{
              native: true 
            }}
            helperText="Por favor selecciona tu categoría"
            variant="filled"
            name='cat'
            onChange={this.onChange}
          >
          <option value='Todas'>Todas las categorias</option>
          <option value='Audio y musica'>Audio y musica</option>
          <option value='Video'>Video</option>
          <option value='Deportes'>Deportes</option>
          <option value='Herramientas'>Herramientas</option>
          <option value='Fiestas'>Fiestas</option>
          <option value='Campamento y Excursion'>Campamento y Excursión</option>
          </TextField>
           <TextField
            label='¿Que deseas rentar?'
            name='title'
            variant="filled"
          
            >
            </TextField>
            <Button onClick={this.onClick} size="small" style={{backgroundColor:'white'}}>
            <SearchIcon style={{height:40}}/>
            </Button>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
