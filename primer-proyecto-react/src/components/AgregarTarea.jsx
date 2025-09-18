import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)

        // const envio = {
        //     nombre: inputValue,
        //     visto: false
        // }

        // agregarTarea(tareas => {return [...tareas, envio]})
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresar tarea"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}