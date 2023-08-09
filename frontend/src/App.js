import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import AlertMess from './Components/AlertMess';
import Home from './Components/Home';
import Login from './Components/Login';
import Navibar from './Components/Navibar';
import Signup from './Components/Signup';
import NoteState from './Context/Notes/NoteState';
import { useState } from 'react';

function App() {

  const [alert, setalert] = useState(null);
  const showAlert = (mesg, type) => {
    setalert({
      mesg: mesg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <div>
      <NoteState>
      <BrowserRouter>
      <Navibar/>
      <AlertMess alert={alert}/>
      <Container>
      <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
        <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
      </Routes>
      </Container>
      </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;

