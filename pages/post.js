import { withRouter } from 'next/router'
import Header from '../components/header';

//use the api here to get the details from the title query from the props as given below

const Content = withRouter(props => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))

const Page = () => (
  <div class="container">
    <Header/>
    <Content></Content>
  </div>
)

export default Page