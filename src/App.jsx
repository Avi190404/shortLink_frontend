import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer'
import RouteConfig from './config/routeConfig.jsx'
import './App.css'
import  AppProvider  from './context/appContext'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <RouteConfig />
        {/* <Footer /> */}
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
