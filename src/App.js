import logo from './logo.svg';
import Get2 from './comp/API/Get2'
import Post from './comp/API/Post';
import Delete from './comp/API/Delete';
import FileUpload from './comp/FileUpload';
import FileUrls from './comp/FileUrls';
import FromPython from './comp/FromPython';
import './App.css';
import Login from './comp/Login';
import Signup from './comp/Signup';
import Log from './comp/Log';
import Footer from './comp/API/layout/Footer';
import HomePageTeamLeader from './comp/HomePages/HomePageTeamLeader';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import HomePageManager from './comp/HomePages/HomePageManager';
import HomePageWorker from './comp/HomePages/HomePageWorker';
import HomePageSecretary from './comp/HomePages/HomePageSecretary';
import HomePagekindergartenTeacher from './comp/HomePages/HomePagekindergartenTeacher';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="application_wrapper">

    //     <div className="application_routeHandler">
    //         <CreateAccountScreen/>
    //     </div>
        
    //   </div>
    <div>
      <center>

      {/* <h1>Get</h1>
      <Get2/>
      <h1>Post</h1>
      <Post/>
      <h1>Delete</h1>
      <Delete/>
      <h1>FileUpload</h1>
      <FileUpload/>
      <h1>FileUrls</h1>
      <FileUrls/>
      <h1>FromPython</h1>
      <FromPython/>
      <h1>Login</h1>
      <Login/>
      <h1>Signup</h1>
      <Signup/> */}
      {/* <Login></Login>
      <Signup></Signup>
      <Footer></Footer>
      <HomePageTeamLeader></HomePageTeamLeader> */}
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
