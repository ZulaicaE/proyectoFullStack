import './TituloPrincipal.css'

export const TituloPrincipal = (props:any) => { 
  const titulo = props.titulo;

  return (
      <h1 className='titulo'>
        {titulo}
      </h1>    
  )
}