import React from 'react';
import Contador from './Contador';
import Card from './Card';
import useContador from './funcionesContador';

const CardsAndCounter = () => {
  const { contador, aumentar, disminuir, restaurar } = useContador();

  return (
    <>
      {/* Contenedor para el grupo de cartas */}
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='overflow-x-auto d-flex'>
          <div className='col-md-3'>
            <Card contador={contador} />
          </div>
          <div className='col-md-3'>
            <Card contador={contador} />
          </div>
          <div className='col-md-3'>
            <Card contador={contador} />
          </div>
          <div className='col-md-3'>
            <Card contador={contador} />
          </div>
          <div className='col-md-3'>
            <Card contador={contador} />
          </div>
          <div className='col-md-3'>
            <Card contador={contador} />
          </div>
        </div>
      </div>
       
      <div>
        <Contador contador={contador} aumentar={aumentar} disminuir={disminuir} restaurar={restaurar} />
      </div>
    </>
  );
}

export default CardsAndCounter;
