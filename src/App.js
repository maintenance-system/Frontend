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
      <Login></Login>
      <Signup></Signup>
      <Footer></Footer>
      <HomePageTeamLeader></HomePageTeamLeader>
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/electronic' element={<Electronic />} />
            <Route exact path='/paper' element={<Paper />} />
            <Route exact path='/filing' element={<Filing />} />
            <Route exact path='/stationery' element={<Stationery />} />
            <Route exact path='/cart' element={<CartDetails />} />
            <Route exact path='/branches' element={<Branches />} />
            {/* <Route exact path='/noProducts' element={<NoProducts/>} /> */}
          </Routes>
        </BrowserRouter>
      </center>

    </div>
    
  );
}

export default App;
