import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ComponenteClase from './ComponenteClase'
import { PrimerComponente } from './PrimerComponente'
import { ContadorApp } from './ContadorApp'
import { ContadorApp02 } from './ContadorApp02'
import { ContadorApp03 } from './ContadorApp03'
import { ListadoApp } from './ListadoApp'
import { ContadorCambiaTitulo } from './components/mis-componentes/ContadorCambiaTitulo'
import { UsersApp } from './UsersApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrimerComponente titulo="Esta sección es de props" subtitulo="Curso React" numero={4}/> */}
    {/* <ComponenteClase /> */}
    {/* <ContadorApp /> */}
    {/* <ContadorApp02 /> */}
    {/* <ContadorApp03 value={0}/> */}
    {/* <ListadoApp /> */}
    {/* <ContadorCambiaTitulo /> */}
    < UsersApp />

  </StrictMode>,
)
