import { useState } from 'react'
import { AgregarTarea } from './components/AgregarTarea'
const Item = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {/* {visto ? '✅' : '⛔'} */}
            {visto && '✅'}
        </li>
    )

}

export const ListadoApp = () => {
    let listadoSecciones = [
        { nombre: 'Instalaciones necesarias', visto: true },
        { nombre: "Instalaciones neesarias", visto: true },
        { nombre: "Uso de Vite", visto: true },
        { nombre: "Componentes", visto: true },
        { nombre: "Variables en JSX", visto: true },
        { nombre: "Props", visto: true },
        { nombre: "Eventos", visto: true },
        { nombre: "useState", visto: true },
        { nombre: "Redux", visto: false },
        { nombre: "customHooks", visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={setArreglo}/>
            <ol>
                {/* <Item nombre="Instalaciones neesarias" visto={true}></Item> */}
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>
        </>
    )
}