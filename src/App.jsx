import { useState } from "react";
import "./App.css";
import Builder from "./components/Builder";
import Element from "./components/Element";

function App() {
  const [receivedData, setReceivedData] = useState([]);

  const reciveData = (data) => {
    setReceivedData(data);
  };

  console.log('app', receivedData)
  return (
    <>
    <Builder sentData={reciveData}/>
    {/* {receivedData ? receivedData.map((field, i) => <Element key={i} field={field}/>) : null} */}
    <Element  field={receivedData}/>
    </>
  );
}

export default App;
