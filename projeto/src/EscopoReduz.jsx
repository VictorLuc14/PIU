const EscopoReduz = () =>{
    function handleClick(elemento){
        return(
            elemento.style.color = "red"
        )
    }
    return(
        <>
            <button onClick={()=> console.log("hello world")} >Clique</button>
            
            <div>
                <button onClick={'handleClick(this)'}>Butao</button>
            </div>
        </>
    )
}

export default EscopoReduz