import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { Footer, Nav ,Home, Service , Login} from './componants';
import {AuthContextProvider } from './context/AuthContex.jsx'

function App() {
  return (
    <Router>
      <AuthContextProvider>

      
    <div style={{ fontFamily: 'Avenir' }}>
       <Nav/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      {/* <Route exact path='/' element={<Home/>}/> */}
      </Routes>
       <Footer/>
    </div>
    </AuthContextProvider>
    </Router>
  );
}

export default App;
