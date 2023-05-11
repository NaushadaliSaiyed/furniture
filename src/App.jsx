import './App.css'
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from './routes/routes';
import Navbar from './components/Navbar';


function App() {

  const route = useRoutes(routes())

  return route
}
const AppWrapper = () => {
  return (
    <BrowserRouter>
      <div className='bg-[#BFC0BD] w-full h-screen flex justify-center items-center'>
        <div className='w-[90%] h-[80%] flex'>
          <Navbar/>
          <App />
        </div>
      </div>
    </BrowserRouter>
  )

}


export default AppWrapper
