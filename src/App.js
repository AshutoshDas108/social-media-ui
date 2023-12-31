
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
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Profile from './Profile/Profile';



function App() {
  const {auth} = useSelector(store => store)
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  }, 
  [dispatch, jwt])

  return (

    // <ThemeProvider theme={darkTheme}>

    

    <div className=''>
      <Routes>
        {/* /* logic --> auth?.user?<HomePage/>:<Authentication /> */}
      {/* <Route path='/*' element={auth?.user?<HomePage/>:<Authentication />}/> */}
      <Route path='/*' element={auth?.user ? <HomePage key={auth?.user} /> : <Authentication key={auth?.user} />} />
      {/* <Route path='/' element={<HomePage/>}/> */}
      <Route path='/messages' element={<Message/>}/>
      {/* <Route path='/login' element={<Authentication/>} /> */}
        {/* <Route path='/authentication' element={<Authentication/>}/> */}
        {/* <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/*' element={<Authentication/>} /> */}
        {/* <Route path='/profile/*' element={<Profile/>}/> */}
     </Routes>
     </div>
      
    
    // {/* </ThemeProvider> */}
  );
}

export default App;
