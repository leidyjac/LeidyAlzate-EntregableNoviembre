//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre, instrumento}) {
  return (
    <div>
      <h2>Datos Ingresados</h2>
      <p>{nombre}</p>
      <p>{instrumento}</p>
    </div>
  );
}

export default Card;
