import Header from "../components/header";
import '../styles.css'
export default ()=>{
    return(
        <div>
            <Header/>
            <div class="container" style={{padding:40,marginTop:50,border:'1px solid grey'}}>
            <h3 style={{textAlign:"center"}}>Login</h3>
            <form action="/login" method="POST">
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="username" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" type="password" class="form-control" placeholder="Password"/>
                </div>
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
    )
}