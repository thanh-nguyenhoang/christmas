import present from "./resources/package.jpg";
import "./App.css";
import React, { useRef, useEffect } from "react";

const scale = 0.3;
const presentHeight = 2737 * scale;
const presenWidth = 2043 * scale;
function ScratchRevealCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const brushRadius = (canvas.width / 100) * 5;
    const image = new Image();
    image.src = present;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, brushRadius, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, []);

  return (
    <canvas
      id="bridge"
      ref={canvasRef}
      width={presenWidth}
      height={presentHeight}
    />
  );
}
function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 className="title-text">Merry Christmas Alexandra 💛</h1>
        <p className="description">scratch it open 😊</p>
      </div>
      <figure id="bridgeContainer">
        <ScratchRevealCanvas></ScratchRevealCanvas>
      </figure>
    </div>
  );
}

export default App;
