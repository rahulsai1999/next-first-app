import Header from "../components/header";

export default ()=>{
    return(
        <div>
            <Header/>
            Protected stuff
            <a href="/logout">Logout</a>
        </div>
    )
}