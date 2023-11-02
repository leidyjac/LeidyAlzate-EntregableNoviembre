import { useState } from "react";
import Card from "./Components/Card";


function App() {
  const [nombre, setNombre] = useState("")
  const [instrumento, setInstrumento] = useState("")
  

  const onChangeNombre = (e) => setNombre(e.target.value)
  const onChangeInstrumento = (e) => setInstrumento (e.target.value)
  const [envioFormulario, setenvioFormulario] =useState(false)

  const handleSubmit = (e) => {
     e.preventDefault()
     

     if (nombre.length < 3 || /^\s/.test(nombre) == true || instrumento.length < 6 ){
      alert ("Por favor chequea que la información sea correcta")
     }else{
      setenvioFormulario(true)
     }   

   }

  return (
    <>
      <h1>Formulario Instrumentos Musicales</h1>

      <form 
      onSubmit={handleSubmit}
      >
        <input 
        type="text"
        placeholder="Ingresa Tu Nombre"
        value = {nombre}
        onChange={onChangeNombre}
       />

        <input 
        type="text" 
        placeholder = "Ingresa tu instrumento"
        value = {instrumento}
        onChange = {onChangeInstrumento}
        />
        <br/>
        <br />
        <input 
        type="submit"
        value = "Enviar datos"
        />
        </form>
      
      {envioFormulario &&
      <Card
      nombre = {nombre}
      instrumento = {instrumento}
      />}  
      </>
  );
}

export default App;
