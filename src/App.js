import logo from './logo.svg';
import './App.css';
import React from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <h1>Photobooth</h1>
        <p>take your own photos!</p>
      <div>
        <button>b&w</button>
        <button>blue</button>
        <button>color</button>
        <WebcamCapture />
        
      </div>
    </div>
  );
}
//3 times, count down from 3 then take photo
const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc1, setImgSrc1] = React.useState(null);
  const [imgSrc2, setImgSrc2] = React.useState(null);
  const [imgSrc3, setImgSrc3] = React.useState(null);
    async function gogogo(){
      await countDown();
      setImgSrc1(webcamRef.current.getScreenshot());
      console.log("done");
      await countDown();
      setImgSrc2(webcamRef.current.getScreenshot());
      await countDown();
      setImgSrc3(webcamRef.current.getScreenshot());

    }

    const countDown = () => {
      return new Promise(resolve => {
      let count = 4;
      console.log(count);
      
      const timer = setInterval(() => {
        count--;
          document.getElementById("countingdown").innerHTML = count.toString();

        if(count===0){
          clearInterval(timer);
          
        }
      }, 1000);
      }); 
    }


 

  return (
    <>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />

      <p id="countingdown">3</p>
      <button onClick={gogogo}>Start!</button>
      
        <img id = "photo1" src = {imgSrc1} />
        <img id = "photo2" src = {imgSrc2} />
        <img id = "photo1" src = {imgSrc3} />
    
    </>
  );

}
//321 go 





export default App;
