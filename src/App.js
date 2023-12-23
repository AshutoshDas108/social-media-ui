
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import Message from './pages/Message/message';
import HomePage from './pages/HomePage/HomePage';



function App() {
  return (
    <div>
      <Routes>

      <Route path='/*' element={<HomePage/>} />
        <Route path='/messages' element={<Message/>}/>
        <Route path='/*' element={<Authentication/>} />

      </Routes>
      
    </div>
  );
}

export default App;
