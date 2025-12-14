import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import React, { useImperativeHandle } from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import frame from './assets/frame.png'
import photobooth from './assets/photobooth.png'
import miffy from './assets/miffy.png'

var filter = "color";


function App() {
  const [imgSrc1, setImgSrc1] = React.useState(null);
  const [imgSrc2, setImgSrc2] = React.useState(null);
  const [imgSrc3, setImgSrc3] = React.useState(null);
  //creates ref
  const captureRef = React.useRef(null); 
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

    <div class="App">
        <div class="toprow">
          <img class="photoboothtext" src = {photobooth}></img>
        </div>
        <div class="midsection">
          <div class="camframe">
            <img class="photoframe" src = {frame}></img>
            <WebcamCapture ref={captureRef} setImgSrc1={setImgSrc1} setImgSrc2={setImgSrc2} setImgSrc3={setImgSrc3} > </WebcamCapture>
            
          </div>
          <div class="photo-strip">
            <div class="photo-slot"><img id = "photo1" src = {imgSrc1} /></div>
            <div class="photo-slot"><img id = "photo2" src = {imgSrc2} /></div>
            <div class="photo-slot"><img id = "photo3" src = {imgSrc3} /></div>
          </div>
        </div>
        <div class="bottom">
          <button class="startbutton" onClick={() => captureRef.current.startCapture()}>Start!</button>
          
        </div>
        
    </div>
    </BrowserRouter>

  );
}
function updateFilter(fil){
  filter = fil;
}

const WebcamCapture = React.forwardRef((props, ref) => {
  //ref is passed to child so parent can access
  const webcamRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    //can access startCapture from outside
    startCapture() {
      gogogo();
    }
  }));

    async function gogogo(){
      await countDown();
      props.setImgSrc1(webcamRef.current.getScreenshot());
      await countDown();
      props.setImgSrc2(webcamRef.current.getScreenshot());
      await countDown();
      props.setImgSrc3(webcamRef.current.getScreenshot());
      

    }

    const countDown = () => {
      
      return new Promise(resolve => {
      let count = 4;
      const countdownEl = document.getElementById("countingdown");
      

      console.log(count);
      
      const timer = setInterval(() => {
        count--;
        countdownEl.style.visibility = "visible";
          document.getElementById("countingdown").innerHTML = count.toString();

        if(count===0){
          clearInterval(timer);
          countdownEl.style.visibility = "hidden";
          
          resolve();
    
        }
      }, 1000);
      }); 
    }


 

  return (
    <>
    <div className="photobooth">
      <div className="camera-box">
        <Webcam 
          class="webcam"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <p id="countingdown">3</p>
      
      </div>
      
      
      </div>
      
    </>
  );

});
//321 go 





export default App;
