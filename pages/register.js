export default ()=>{
    return(
        <div>
            <form action="/register" method="POST">
                <input name="username"/>
                <input name="password"/>
                <a href="/login">Login</a>
                <button>Submit</button>
            </form>
        </div>
    )
}