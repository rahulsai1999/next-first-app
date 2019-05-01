import Head from 'next/head'

function Header() {
  return (
    <div>
      <Head>
        <title>Next-App</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}

export default Header