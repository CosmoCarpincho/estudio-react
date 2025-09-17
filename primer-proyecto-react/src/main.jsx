import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ComponenteClase from './ComponenteClase'
import { PrimerComponente } from './PrimerComponente'
import { ContadorApp } from './ContadorApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrimerComponente titulo="Esta sección es de props" subtitulo="Curso React" numero={4}/> */}
    {/* <ComponenteClase /> */}
    <ContadorApp />
  </StrictMode>,
)
