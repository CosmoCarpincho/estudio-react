import { useEffect, useState } from "react";

export const ContadorCambiaTitulo = () => {
    const [ contador , setCount ] = useState(0);

    const sumar = () => {
        setCount(contador + 1)
        console.log(contador)
        
    }

    useEffect(() => {
        document.title = `Has hecho clic ${contador} veces`
    }, [contador])

    return (
        <button onClick={sumar}>
            Clics: {contador}
        </button>
    )
}