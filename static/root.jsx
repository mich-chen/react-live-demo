function App() {
  return <div> Hello World! </div>
}

function Homepage() {
  return <div> Welcome to my site </div>
}

function About() {
  return <div> A tiny react demo site </div>
}


// render the function component App
ReactDOM.render(<App />, document.getElementById('root'))
// can also use document.querySelector('#root')
// this is done, don't have to ReactDOM again for the rest of the file