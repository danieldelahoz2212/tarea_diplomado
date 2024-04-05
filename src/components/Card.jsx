import React from 'react';
import imagen from '../assets/imagen.jpg';

const Card = ({ contador }) => {

  return (
    <div className='col'>
      <div className='card text-center bg-dark border border-5 border-dark' style={{ width: '18rem' }}>
        <img src={imagen} alt='...' />
        <div className='card-body text-light'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='card-title m-0'>Titulo</h2>
            <span className='card-title m-0'>Contador: {contador}</span>
          </div>
          <hr />
          <p className='card-text text-secondary'>
            Aquí va la información que se le va a colocar a la carta
          </p>
          <a href="#" className='btn btn-warning'>Editar</a>
          {' '}
          <a href="#" className='btn btn-danger'>Borrar</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
