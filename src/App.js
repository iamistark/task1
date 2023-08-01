import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Invite from './pages/Invite';
import Jobs from './pages/jobs';
import Login from './pages/login';
import Signup from "./pages/signup"
import Employers from './pages/employers';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={Home}/>
    //     <Route exact path='/invite' element={Invite}/>
    //     <Route exact path='/jobs' element={Jobs}/>
    //     <Route exact path='/login' element={Login}/>
    //     <Route exact path='/signup' element={Signup}/>
    //     <Route exact path='/employers' element={Employers}/>
    //   </Routes>
    // </BrowserRouter>
    <Home/>
    );
}

export default App;
