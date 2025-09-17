// Otro componente dentro del mismo archivo
const Button = () => {
    return (
        <button>Soy un botón</button>
    )
}



export const ContadorApp = () => {
    function handleClick(event,arg) {
        console.log(event)
        if (arg != null)
            console.log(arg)
    }
    return (
        <>
            <h1>Contador:</h1>
            <Button></Button>
            {/* Forma con función anonima no es lo correcto */}
            <button onClick={ function (event) {
                console.log("soy otro botón");
                console.log(event)

            }}>
                Soy otro botón
            </button>

            {/* Forma con función desde afuera. Forma incorrecta. Es solo tutorial. */}
            <button onClick={(event) => handleClick(event)}>Soy otro botón mas</button>

            {/* forma correcta si es un solo argumento*/}
            <button onClick={handleClick}>Botón final</button>

            {/* Con mas de un argumento */}
            <button onClick={(event) => handleClick(event, 'Otro argumento')}>Com mas argumentos</button>
        </>
    )
}