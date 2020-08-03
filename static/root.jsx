function Homepage() {
  return <div> Welcome to my site </div>
}

function About() {
  return <div> A tiny react demo site </div>
}


function ShoppingListItems(props) {
  return <li> {props.item} </li>
}

// this is now rendering shoppinglistitems
function ShoppingList() {
  return (
    <ul>
    
      <ShoppingListItems item="milk" />
      <ShoppingListItems item="kombucha" />
      <ShoppingListItems item="pineapple" />
      <ShoppingListItems item="hot sauce" />
      
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
      <About />
    </div>
    )
}


// render the function component App
ReactDOM.render(<App />, document.getElementById('root'))
// can also use document.querySelector('#root')
// this is done, don't have to ReactDOM again for the rest of the file