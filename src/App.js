import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { Footer, Nav ,Home, Service , Login,Chat} from './componants';
import {AuthContextProvider } from './context/AuthContex.jsx'
import Protected from './componants/Protected';

function App() {
  return (
    <Router>
      <AuthContextProvider>

      
    <div style={{ fontFamily: 'Avenir' }}>
      
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/chat'
       element={ 
        <Protected>
       <Chat/> 
       </Protected>
      }
       />
        
      </Routes>
    </div>
    </AuthContextProvider>
    </Router>
  );
}

export default App;
