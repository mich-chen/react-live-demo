function Homepage() {
  return <div> Welcome to my site </div>
}

function About() {
  return <div> A tiny react demo site </div>
}

function ShoppingList() {
  return (
    <ul>
      <li>milk</li>
      <li>kombucha</li>
      <li>pineapple</li>
      <li>hot sauce </li>
    </ul>
  )
}



// App component renders my Homepage component using <component />
// components rendering components
function App() {
  return (
    // can only return one thing, so combine them into a single div
    <div>
      <Homepage />
      <ShoppingList />
    </div>
    )
}


// render the function component App
ReactDOM.render(<App />, document.getElementById('root'))
// can also use document.querySelector('#root')
// this is done, don't have to ReactDOM again for the rest of the file