import React from 'react';

const Contador = ({ contador, aumentar, disminuir, restaurar }) => {

  return (
    <>
      <div className='col-md-4 mx-auto'>
        <div className='card text-center bg-dark border border-5 border-dark'>
          <div className='card-body text-light'>
            <h2 className='card-title'>Contador</h2>
            <h3 className='card-text text-secondary'>Contador: {contador}</h3>
            <button className='btn btn-primary' onClick={aumentar}>Aumentar</button>
            {' '}
            <button className='btn btn-primary' onClick={disminuir}>Disminuir</button>
            {' '}
            <button className='btn btn-primary' onClick={restaurar}>Resetear</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default Contador;
