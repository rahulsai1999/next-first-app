export default ()=>{
    return(
        <div>
            <form action="/login" method="POST">
                <input name="username"/>
                <input name="password"/>
                <a href="/register">Sign-Up</a>
                <button>Submit</button>
            </form>
        </div>
    )
}