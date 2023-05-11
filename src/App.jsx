import './App.css'
import Left from './components/Left'
import Navbar from './components/Navbar'
import Right from './components/Right'

function App() {

  return (
    <div className='bg-[#BFC0BD] w-full h-screen flex justify-center items-center'>
      <div className='w-[90%] h-[80%] flex'>
      <Navbar />
      <Left />
      <Right />
      </div>
    </div>
  )
}

export default App
