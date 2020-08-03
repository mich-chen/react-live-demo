function Homepage() {
  return <div> Welcome to my site </div>
}

function About() {
  return <div> A tiny react demo site </div>
}

// allows for reusability and just specify prop=whatever you want
// props anything we pass in as object
// if we did props.anythingIWant, and if an object does not have that then it just returns undefined, will not throw an error
// jsx ignores "undefined" it just sees nothing so puts nothing
function ShoppingListItems(props) {
  return <li> {props.item} </li>
}

// this is now rendering shoppinglistitems
function ShoppingList() {
  return (
    <ul>
    
      <ShoppingListItems item="milk" anythingIWant="muffin"/>
      <ShoppingListItems item="kombucha" />
      <ShoppingListItems item="pineapple" />
      <ShoppingListItems item="hot sauce" />

    </ul>
  )
}




// high level component that will keep nesting components to render
// App component renders my Homepage component using <component />
// components rendering components
// <Homepage /> is short cut for <Homepage></Homepage>
function App() {
  // keeps track where we currently are
  const [nav, setNav] = React.useState('home')

  if (nav == 'home') {
    return (
      <div>
          <button onClick={() => setNav('home')}> Homepage </button>
          <button onClick={() => setNav('about')}> About </button>
          <Homepage></Homepage>
      </div>
      
      )
  }

  if (nav == 'about') {
    return (
      <div>
          <button onClick={() => setNav('home')}> Homepage </button>
          <button onClick={() => setNav('about')}> About </button>
          <About></About>
          <ShoppingList></ShoppingList>
      </div>
    )
  }
}
//   return (
//     // can only return one thing, so combine them into a single div
//     <div>
//           <button onClick={}> Homepage </button>
//           <button onClick={}> About </button>
//       <Homepage />
//       <ShoppingList />
//       <About />
//     </div>
//     )
// }


// render the function component App
ReactDOM.render(<App />, document.getElementById('root'))
// can also use document.querySelector('#root')
// this is done, don't have to ReactDOM again for the rest of the file