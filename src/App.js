
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/HomePage/HomePage';

import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './redux/Auth/auth.action';
import { useEffect } from 'react';
// import Register from './pages/Authentication/Register';
// import Login from './pages/Authentication/Login';
import Message from './pages/Message/Message';



function App() {
  const {auth} = useSelector(store => store)
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  }, 
  [dispatch, jwt])

  return (
    <div className=''>
      <Routes>
      <Route path='/*' element={auth.user?<HomePage/>:<Authentication />}/>
      <Route path='/messages' element={<Message/>}/>
        {/* <Route path='/authentication' element={<Authentication/>}/> */}
        {/* <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/*' element={<Authentication/>} /> */}
     </Routes>
      
    </div>
  );
}

export default App;
