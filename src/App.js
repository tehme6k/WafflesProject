import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [product, setProduct] = useState({
    partNumber: "",
    name: "",
    defaultUnit: ""
  });

  function handleClick(){
    console.log("clicked")
  }

  function handleChange(event){
    const {name, value} = event.target;

    setProduct(prevValue => {
      if(name === "part_number"){
        return {
          partNumber: value,
          name: prevValue.name,
          defaultUnit: prevValue.defaultUnit
        }
      }else if(name === "name"){
        return {
          partNumber: prevValue.partNumber,
          name: value,
          defaultUnit: prevValue.defaultUnit
        }
      }else if(name === "unit"){
        return {
          partNumber: prevValue.partNumber,
          name: prevValue.name,
          defaultUnit: value
        }
      }
    });
    console.log("changed")
  }

  return (
    <div className="App">
      <header className="App-header">       
        <h1>New Product</h1> 
        <p>Enter new product info below</p>

        <label htmlFor="part_number">Part Number</label>
        <input onChange={handleChange} type="text" name="part_number" id="part_number" />

        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" id="name" />


        <label htmlFor="unit">Unit</label>
        <input onChange={handleChange} type="text" name="unit" id="unit" />

        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
