import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = (props) => {
  return(
    <div>
      <h3>{props.match.params.topicId}</h3>
    </div>
  );
}

const WrappedRoute = (props) => {
  console.log("WrappedRoute props", props)
  return(
    <div>
      <h3>{props.yo()}</h3>
      <Route path={`${props.match.path}/:topicId`} render={Topic}/>
    </div>
  );
}

const Topics = (props) => {
  return(
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    <WrappedRoute yo={() => "yo"} {...props}></WrappedRoute>
    <Route exact path={props.match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>)
}

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample
