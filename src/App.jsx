import './App.css'
import {ToastContainer} from 'react-toastify'
import Home from './components/Home'

function App() {
  
  return (
    <div className="App">
      <ToastContainer  position='top-center' theme='dark'/>

      <Home />
      
    </div>
  )
}

export default App
