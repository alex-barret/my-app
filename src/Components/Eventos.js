


function Eventos({numero}){
    function meuEvento(){
        console.log(`Opa, Fui Ativado ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos