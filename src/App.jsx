import Navbar from "./Components/Navbar/Navbar"

function App() {

  console.log('render App')

  return (
    <>
   <Navbar />
   <ItemListContainer greeting='Bienvenidos todos' />
   </>
  )
}

export default App
