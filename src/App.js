import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App(){
  let [dataFromDB, setDataFromDB] = useState("")
  const inputTIT = useRef();
  const inputAMO = useRef();

  useEffect(()=> {

    console.log(dataFromDB)

  },[dataFromDB])

  function buttonFun(){
    console.log("button pressed")
    let infoSetFromReviewInputs = {
      title: inputTIT.current.value,
      amount: inputAMO.current.value,


    }



    const options1 = {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(infoSetFromReviewInputs)
    }
    fetch(`http://localhost:3030/createObj`, options1).then(res => res.json())
        .then(data => {
          console.log(data)
          setDataFromDB(data.message)


        })

  }

  function buttonFun2(){
    console.log("button2 pressed")





    fetch(`http://localhost:3030/get`).then(res => res.json())
        .then(data => {
          console.log(data)

        })

  }


  return (
    <div className="App">
      <div className="test">test</div>
        <input ref={inputTIT} type="text" placeholder="enter title"/>
        <input ref={inputAMO} type="text" placeholder="enter amount"/>
    <button onClick={buttonFun}>send info to server</button>
      <button onClick={buttonFun2}>get info from server</button>
    </div>
  );
}

export default App;
