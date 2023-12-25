
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Message from './pages/Message/message';
import HomePage from './pages/HomePage/HomePage';
// import Register from './pages/Authentication/Register';
// import Login from './pages/Authentication/Login';



function App() {
  return (
    <div>
      <Routes>

      <Route path='/*' element={<HomePage/>} />
        <Route path='/messages' element={<Message/>}/>
        <Route path='/authentication' element={<Authentication/>}/>
        {/* <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/*' element={<Authentication/>} /> */}

      </Routes>
      
    </div>
  );
}

export default App;
