import React from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom/client';
import photobooth from "./assets/photobooth.png";
import whiteGrid from "./assets/whiteGrid.png"
 
var filter = "color";
function App() {
  return (
    <div>
      <link href = "/tailwind.css" rel="stylesheet"></link>
      <div>
        <h1 className="text-6xl text-red-500">TEST</h1>
      </div>
    


    <div className="min-h-screen bg-red-300"
    style={{backgroundImage: `url(${whiteGrid})`}} 
    >
        <button onClick={() => updateFilter("bw")}>b&w</button>
        <button onClick={() => updateFilter("blue")}>blue</button>
        <button onClick={() => updateFilter("color")}>color</button>
        <WebcamCapture />
    </div>
    </div>
  );
}
//3 times, count down from 3 then take photo
function updateFilter(fil){
  filter = fil;
}
const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc1, setImgSrc1] = React.useState(null);
  const [imgSrc2, setImgSrc2] = React.useState(null);
  const [imgSrc3, setImgSrc3] = React.useState(null);
    async function gogogo(){
      await countDown();
      setImgSrc1(webcamRef.current.getScreenshot());
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
          resolve();
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
        <img id = "photo3" src = {imgSrc3} />
    </>
  );
}
export default App;
