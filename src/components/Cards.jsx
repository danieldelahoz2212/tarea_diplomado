import React from 'react';
import Contador from './Contador';
import Card from './Card';
import useContador from './funcionesContador';
import imagen from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';
import imagen4 from '../assets/imagen4.jpg';
import imagen5 from '../assets/imagen5.jpg';
import imagen6 from '../assets/imagen6.jpg';

const CardsAndCounter = () => {
  const { contador, aumentar, disminuir, restaurar } = useContador();

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='overflow-x-auto d-flex' style={{ marginTop: '20px' }}>
          <div className='col-md-3'>
            <Card
              Imagen={imagen}
              contador={contador}
              Titulo={'Isla Grande'}
              Parrafo={'Es una isla bonita con playas que invitan al descanso frente al mar. Para llegar aquí debes comprar tus pasajes de avión hasta Cartagena de Indias y tomar un barco que te situará en el archipiélago de Rosario.'}
            />
          </div>
          <div className='col-md-3'>
            <Card
              Imagen={imagen2}
              contador={contador}
              Titulo={'Islote Sucre (Johnny Cay)'}
              Parrafo={'Una isla encantadora es el Islote Sucre, un pequeño atolón ubicado en la isla de San Andrés. Necesitas acercarte al muelle Portofino de esta isla para tomar una lancha que te lleve a Johnny Cay, como se le conoce internacionalmente.'}
            />
          </div>
          <div className='col-md-3'>
            <Card
              Imagen={imagen3}
              contador={contador}
              Titulo={'Isla Malpelo'}
              Parrafo={'Entre las islas de Colombia que son santuario de fauna y flora se encuentra la Isla de Malpelo. Este paraíso para bucear con los tiburones se ubica del lado del Pacífico colombiano.'}
            />
          </div>
          <div className='col-md-3'>
            <Card
              Imagen={imagen4}
              contador={contador}
              Titulo={'Isla Tintipán'}
              Parrafo={'Esta isla con manglares forma parte de otras diez que conforman el archipiélago de San Bernardo (departamento de Sucre). Para visitarla debes salir desde Cartagena y tomar un autobús a Tolú. El viaje por carretera dura una dos horas.'}
            />
          </div>
          <div className='col-md-3'>
            <Card
              Imagen={imagen5}
              contador={contador}
              Titulo={'Isla de la Corota'}
              Parrafo={'Es una de las más pequeñas islas de Colombia, ya que solo tiene 12 hectáreas. ¡Pero que esto no te engañe! La Isla de la Corota es un santuario de flora y fauna que se encuentra en la Laguna de la Cocha, departamento de Nariño. Esta laguna es la segunda más grande de Colombia.'}
            />
          </div>
          <div className='col-md-3'>
            <Card
              Imagen={imagen6}
              contador={contador}
              Titulo={'Isla Múcura'}
              Parrafo={'Esta isla del archipiélago de San Bernardo cuenta con hoteles y áreas destinadas al turismo. Forma parte del Distrito de Cartagena y es un lugar muy tranquilo para tumbarse en la arena, nadar y recargar las baterías.'}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <Contador contador={contador} aumentar={aumentar} disminuir={disminuir} restaurar={restaurar} />
      </div>
    </>
  );
}

export default CardsAndCounter;
