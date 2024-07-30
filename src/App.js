import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Createpost from './components/Createpost';
import Viewall from './components/Viewall';
import Viewmy from './components/Viewmy';

function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/create' element={<Createpost/>} />
      <Route path='/view' element={<Viewall/>} />
      <Route path='/viewmy' element={<Viewmy/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
