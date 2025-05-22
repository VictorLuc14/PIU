export default function Cards(card){
    return(
        <>
        <div style={{margin:"10px"}}>    
            <img src={card.img} style={{height: "300px"}}/>
            <p>{card.title}</p>
        </div>
        </>
    )
}