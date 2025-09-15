import './styles/PrimerComonente.css'

const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boleanoos = true
const funcion = () => 1+1
const objeto = { nombre: 'Curso de JavaScript', duracion: 4}
const fecha = new Date()


export const PrimerComponente01 = () => {
    return (
        <>
        <h1>{1 + 1}</h1>
        <h1>{string}</h1>
        <h4>{number}</h4>
        <h1>{array}</h1>
        <h1>{funcion()}</h1>
        <h1>{boleanoos}</h1> {/* no se imprime*/}
        {/* <h1>{objeto}</h1> ERROR no se puede imprimir un objeto directamente */}
        <h1>{JSON.stringify(objeto)}</h1>
        <h4>{JSON.stringify(fecha)}</h4>
        </>
    )
}