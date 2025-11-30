import logo from './logo.svg';
import './App.css';
import React from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import frame from './assets/frame.png'
import photostrip from './assets/photostrip.png'
import photobooth from './assets/photobooth.png'
import miffy from './assets/miffy.png'

var filter = "color";


function App() {
  return (
    <div class="App">
        <div class="toprow">
          <img class="photoboothtext" src = {photobooth}></img>
            <img  class="miffy" src = {miffy}></img>
        </div>
        <div class="midsection">
          <div class="camframe">
            <img class="photoframe" src = {frame}></img>
            <WebcamCapture > </WebcamCapture>
          </div>

        </div>
        <button onClick={updateFilter("bw")}>b&w</button>
        <button onClick={updateFilter("color")}>color</button>
        <p id="countingdown">3</p>
    </div>
  );
}
function updateFilter(fil){
  filter = fil;
}

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc1, setImgSrc1] = React.useState(null);
  const [imgSrc2, setImgSrc2] = React.useState(null);
  const [imgSrc3, setImgSrc3] = React.useState(null);
  const [imgSrc4, setImgSrc4] = React.useState(null);

    async function gogogo(){
      await countDown();
      setImgSrc1(webcamRef.current.getScreenshot());
      await countDown();
      setImgSrc2(webcamRef.current.getScreenshot());
      await countDown();
      setImgSrc3(webcamRef.current.getScreenshot());
      await countDown();
      setImgSrc4(webcamRef.current.getScreenshot());

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
      </div>
      <div id="photo-strip">


        <div class="photo-slot">
          <img id = "photo1" src = {imgSrc1} />
        </div>

        <div class="photo-slot">
        <img id = "photo2" src = {imgSrc2} />
        </div>

        <div class="photo-slot">
        <img id = "photo3" src = {imgSrc3} />
        </div>

        <div class="photo-slot">
        <img id = "photo4" src = {imgSrc4} />
        </div>

      </div>
      </div>
      <button class="startbutton" onClick={gogogo}>Start!</button>
      
    </>
  );

}
//321 go 





export default App;
