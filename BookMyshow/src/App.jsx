import { MidNavbar } from "./components/MidNavbar"
import { Movies } from "./components/Movies"
import { Navbar } from "./components/Navbar"
import { Slider } from "./components/Slider"


function App() {
  

  return (
    <div>
     
      <div className="container">
      <Navbar/>
      <MidNavbar/>
      <Slider/>
      <Movies/>
      </div>
      
    </div>
  )
}

export default App
