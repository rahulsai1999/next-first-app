import Header from '../components/header'
import "../styles.css"

export default function Blog(){
    return(
        <div>
            <Header/>
            <div class="container borderedcomp">
            <p>Hello</p>
            <button class="btn btn-primary">Button</button>
            <a class="btn btn-success" href="/login">Login</a>
            </div>
        </div>  
    )
}