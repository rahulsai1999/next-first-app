import "../styles.css"

export default function Blog(){
    return(
        <div>
            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <header class="masthead mb-auto">
            <div class="inner">
                <h3 class="masthead-brand">Cover</h3>
                <nav class="nav nav-masthead justify-content-center">
                <a class="nav-link active" href="/">Home</a>
                <a class="nav-link" href="/login">Login</a>
                <a class="nav-link" href="/signup">Signup</a>
                </nav>
            </div>
            </header>

            <main role="main" class="inner cover">
            <h1 class="cover-heading">Cover your page.</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
                <a href="/relpage" class="btn btn-lg btn-secondary">Learn more</a>
            </p>
            </main>
            </div>
        </div>  
    )
}