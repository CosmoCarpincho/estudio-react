export const PrimerComponente = ({titulo, subtitulo, numero}) => {
    console.log(titulo)
    console.log(subtitulo)
    return (
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <h3>Numero por 5: {numero * 5}</h3>
        </>
    );
}
