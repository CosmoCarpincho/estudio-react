import { useState } from 'react'
import { AgregarTarea } from './components/AgregarTarea'
const Item = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? '✅' : '⛔'}
            {/* {visto && '✅'} */}
        </li>
    )

}

export const ListadoApp = () => {
    let listadoSecciones = [
        { id: 0, nombre: 'Instalaciones necesarias', visto: true },
        { id: 1, nombre: "Uso de Vite", visto: true },
        { id: 2, nombre: "Componentes", visto: true },
        { id: 3, nombre: "Variables en JSX", visto: true },
        { id: 4, nombre: "Props", visto: true },
        { id: 5,nombre: "Eventos", visto: true },
        { id: 6, nombre: "useState", visto: true },
        { id: 7, nombre: "Redux", visto: false },
        { id: 8, nombre: "customHooks", visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAgregarTarea = (valor) => {
        let val = valor.trim()
        if (val < 1) return // validar que el valor exista y no sea vacio
        const envio = {
            id: arreglo.length,
            nombre: val,
            visto: false
        }
        setArreglo([...arreglo, envio])
    }

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}/>
            <ol>
                {/* <Item nombre="Instalaciones neesarias" visto={true}></Item> */}
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>
        </>
    )
}