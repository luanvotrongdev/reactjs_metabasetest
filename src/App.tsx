import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
// import FileSelector from './components/fileSelector';

function App() {
  // "overflow:hidden;height:100%;width:100%"
  const style : CSSProperties = {
    overflow: 'hidden',
    height: "100%",
    width: "100%"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Test metabase
        </p>
      </header>
      {/* <div className="App-main">
        <FileSelector value="TESTESTEST"></FileSelector>
      </div> */}

      <iframe
            className="App-main"
            src="http://18.142.63.231/public/dashboard/f3f86929-fb6e-4559-8c13-03810dd89fa6"
            frameBorder="0"
            width="100%"
            height="100%"
            allowTransparency
        ></iframe>
      
    </div>
  );
}

export default App;
