import logo from './logo.svg';
import Get2 from './comp/Get2'
import Post from './comp/Post';
import Delete from './comp/Delete';
import FileUpload from './comp/FileUpload';
import FileUrls from './comp/FileUrls';
import './App.css';

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

      <h1>Get</h1>
      <Get2/>
      <h1>Post</h1>
      <Post/>
      <h1>Delete</h1>
      <Delete/>
      <h1>FileUpload</h1>
      <FileUpload/>
      <h1>FileUrls</h1>
      <FileUrls/>
      </center>

    </div>
    
  );
}

export default App;
