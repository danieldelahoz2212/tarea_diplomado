import React from 'react'
import imagen from '../assets/imagen.jpg'

function Card() {
  return (
    <div className='col'>
      {/* <div className='col-md'> */}
        <div className='card text-center bg-dark border border-5 border-dark' style={{ width: '18rem' }}>
          <img src={imagen} alt='...'/>
          <div className='card-body text-light'>
            <h2 className='card-title'>Titulo</h2>
            <hr/>
            <p className='card-text text-secondary'>
              aqui va la informacion que se le va colocar a la carta
            </p>
            <a href="#" className='btn btn-warning'>Editar</a>
            {' '}
            <a href="#" className='btn btn-danger'>Borrar</a>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Card