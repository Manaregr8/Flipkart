import "@/styles/imageCaptureStyles.css";
import React, { useState, useRef, useEffect } from "react";
import { predictImage } from "../utils/api"; // Assuming you have this utility for making the API request

export default function ImageCapture({ setImage, setPrediction }) {
  const [cameraFacing, setCameraFacing] = useState("user"); // 'user' for front, 'environment' for back
  const [stream, setStream] = useState(null); // Stream state to manage the camera
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Initialize the camera
  const initializeCamera = async () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    const newStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: cameraFacing },
    });

    videoRef.current.srcObject = newStream;
    setStream(newStream);
  };

  useEffect(() => {
    initializeCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraFacing]);

  // Capture the image and send to API
  const handleClick = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    // Set canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Extract image as a Data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Send the captured image to the parent component and API
    setImage(dataUrl);

    // Convert Data URL to Blob and send to backend
    const blob = await fetch(dataUrl).then((res) => res.blob());

    try {
      const result = await predictImage(blob); // Send blob to backend for prediction
      setPrediction(result.predicted_class); // Assuming the backend returns predicted class
    } catch (error) {
      console.error("Error during prediction:", error);
      setPrediction(null);
    }
  };

  // Swap the camera
  const handleSwap = () => {
    setCameraFacing((prev) => (prev === "user" ? "environment" : "user"));
  };

  return (
    <div>
      <div>
        {/* Video feed continues streaming */}
        <video className="videoCanvas" ref={videoRef} autoPlay playsInline />
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} /> {/* Hidden canvas */}
      <div className="buttonContainer">
        <button className="buttonClick" onClick={handleClick} style={{ marginRight: '10px' }}>
          Capture
        </button>
        <button className="buttonClick" onClick={handleSwap}>
          Swap
        </button>
      </div>
    </div>
  );
}
