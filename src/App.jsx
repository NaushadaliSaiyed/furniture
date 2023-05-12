import './App.css'
import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from './components/Navbar';
import routes from './routes/routes';


function App() {

  const route = useRoutes(routes())

  return route
}
const AppWrapper = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <App />
      </>
    </BrowserRouter>
  )

}


export default AppWrapper
