import Get2 from './API/Get2'
import FileUpload from './Pages/FileUpload';
import FileUrls from './Pages/FileUrls';
import FromPython from './Pages/FromPython';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './layout/Footer';
import HomePageTeamLeader from './Pages/HomePages/TeamLeader';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import HomePageManager from './Pages/HomePages/Manager';
import HomePageWorker from './Pages/Worker';
import HomePageSecretary from './Pages/HomePages/Secretary';
import HomePagekindergartenTeacher from './Pages/HomePages/kindergartenTeacher';

function App() {
  return (

    <div>
      <center>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/fileUpload' element={<FileUpload />} />
            <Route exact path='/fileUrl' element={<FileUrls />} />
            <Route exact path='/info' element={<Get2 />} />
            <Route exact path='/fromPython' element={<FromPython />} />
            <Route exact path='/worker' element={<HomePageWorker />} />
            <Route exact path='/kindergartenTeacher' element={<HomePagekindergartenTeacher />} />
            <Route exact path='/secretary' element={<HomePageSecretary />} />
            <Route exact path='/manager' element={<HomePageManager />} />
            <Route exact path='/teamleader' element={<HomePageTeamLeader />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>

      </center>

    </div>
    
  );
}

export default App;
