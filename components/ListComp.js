const ListComp=({data})=>{
    console.log("PROPS",data)
    return(
        <div>
            <p>{data.length}</p>
        </div>
    )
}

export default ListComp