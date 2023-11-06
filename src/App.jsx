import { useState } from "react";
// import "./App.css";
import Builder from "./components/Builder";
import Submission from "./components/Submission";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  // const [receivedData, setReceivedData] = useState([]);
  const [submission, setSubmission] = useState([]);

  // const reciveData = (data) => {
  //   setReceivedData(data);
  // };

  const fieldData = (data) => {
    setSubmission(data);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Form Builder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                <Link to='/'>Builder</Link>  
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                <Link to='/submissions'>Submissions</Link>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    
        <Routes>
          <Route path='/' element={<Builder fieldData={fieldData}/>} />
          {/* <Route path='/element' element={} /> */}
          <Route path='/submissions' element={<Submission field={submission}/>} />
        </Routes>
      
      
      {/* {receivedData ? receivedData.map((field, i) => <Element key={i} field={field}/>) : null} */}
      
    </>
  );
}

export default App;
