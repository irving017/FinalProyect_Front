import React from 'react'
import {Card,CardContent,CardActionArea,CardMedia,Avatar,Grid,TextField} from '@material-ui/core'
import {NavLink} from 'react-router-dom'


const AllProductsDisplay = ({products,showProducts,onChange})=>{
  return(
    <div>
      <h2 style={{textAlign:'center',marginTop:'3%',fontSize:'2.3em', fontWeight:900,marginBottom:'5%'}}>Todos los productos disponibles</h2>
      <div className='products-display'>
      <div style={{padding:'10px 50px',width:400}}>
        <h3>Filtrar por categoria</h3>
        <NavLink to='/post/allproducts'> <TextField
            select
            label="Categorias"
            name='category'
            SelectProps={{
              native: true 
            }}
            helperText="¿Qué categoria deseas?"
            variant="filled"
            name='cat'
            onChange={onChange}
          >
          <option value='Todas'>Todas las categorias</option>
          <option value='Audio y musica'>Audio y musica</option>
          <option value='Video'>Video</option>
          <option value='Deportes'>Deportes</option>
          <option value='Herramientas'>Herramientas</option>
          <option value='Fiestas'>Fiestas</option>
          <option value='Campamento y Excursion'>Campamento y Excursión</option>
          </TextField>
          </NavLink>
      </div>
      <div className='container'>
        <Grid container spacing={Number(16)}>
        {products.map((e,i)=>
          <Grid key={i} item> 
          <Card style={{width:'200px',marginLeft:'3%', marginTop:'5%',height:'300px'}}>
          <CardActionArea onClick={()=>showProducts(e)}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="180"
              image={e.photoURL}
              title="Contemplative Reptile"
            />
            <CardContent style={{display:'flex'}}>
              <div >
              <Avatar aria-label="Recipe">
                R
              </Avatar>
              </div>
              <div style={{marginLeft:'10%'}}>
              <p style={{color:'blue',fontWeight:900}}>{e.title}</p>
              <p style={{color:'black',fontWeight:900}}>${e.price} por día</p>
              </div>          
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        )}
        </Grid>
      </div>
      </div>
    </div>
  )
}

export default AllProductsDisplay