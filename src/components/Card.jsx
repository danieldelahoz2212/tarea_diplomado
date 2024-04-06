import React, { useState } from 'react';


const Card = ({ Imagen, contador, Titulo, Parrafo }) => {
  const [parrafoVisible, setParrafoVisible] = useState(false);

  const visible = () => {
    setParrafoVisible(!parrafoVisible);
  }
  return (
    <>
        <div className='card text-center bg-dark border mx-auto border-5   border-dark' style={{ width: '17rem' }}>
          <img src={Imagen} alt='...' />
          <div className='card-body text-light'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 className='card-title m-0'>{Titulo}</h4>
              <span className='card-title m-0'>Contador: {contador}</span>
            </div>
            <hr />
            {parrafoVisible ? (
              <p className='card-text text-secondary'>{Parrafo}</p>
            ) : (
              <p className='card-text text-secondary'>{Parrafo.slice(0, 100)}...</p>
            )}
            <button className='btn btn-primary' onClick={visible}>
              {parrafoVisible ? 'Ocultar' : 'Información'}
            </button>
          </div>
        </div>
    </>
  );
}

export default Card;
