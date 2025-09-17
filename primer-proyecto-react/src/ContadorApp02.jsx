// Otra forma es sacar las funciones afuera. OJO con el scope

const handleClick = (event) =>
{
    console.log(event)
}

const Button = () => {
    return (
        <button onClick={handleClick}>
            Soy un botón
        </button>
    )
}

export const ContadorApp02 = ({value}) => {
    return (
        <>
            <h1>Contador: </h1>
            <Button />
        </>
    )
}