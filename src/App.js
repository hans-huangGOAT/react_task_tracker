/*
This is needed when using classes to create component
import React from 'react'
*/
import Header from './components/Header'

function App() {
  const name = 'Brad'

  return (
    <div className="container">
      <Header title="Task Tracker" />
    </div>
  );
}

/*
The way to use classes to create a component
class App extends React.Component{
  render() {
    return <h1>Hello from a Class</h1>
  }
}
*/

export default App;
