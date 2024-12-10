import React, { useState, useEffect } from "react";
import "../styles/outputStyles.css";

export default function Output({ image, modelResponse, databaseResponse }) {
  const [imageStatus, setImageStatus] = useState("waiting");
  const [modelStatus, setModelStatus] = useState("waiting");
  const [databaseStatus, setDatabaseStatus] = useState("waiting");
  const [isClient, setIsClient] = useState(false); // Track if we're on the client side

  // Simulate updates to statuses
  useEffect(() => {
    if (image) setImageStatus("captured");
  }, [image]);

  useEffect(() => {
    if (modelResponse) setModelStatus("received");
  }, [modelResponse]);

  useEffect(() => {
    if (databaseResponse) setDatabaseStatus("sent");
  }, [databaseResponse]);

  // Set isClient to true after the component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderStatus = (status, waitingText, successText) => {
    let circleClass = "circle ";
    if (status === "waiting") circleClass += "circle-yellow";
    if (status === "captured" || status === "received" || status === "sent")
      circleClass += "circle-green";

    return (
      <div className="listOutput">
        <div className={circleClass}></div>
        <p>
          {status === "waiting" ? waitingText : successText}
        </p>
      </div>
    );
  };

  // Client-side check for window.open()
  const handleCheckDatabaseClick = () => {
    if (isClient && typeof window !== "undefined") {
      window.open("/database", "_blank");
    }
  };

  return (
    <div className="outputContainer">
      <div className="statusList">
        {renderStatus(
          imageStatus,
          "Waiting for image to be captured",
          "Image has been captured and sent for processing"
        )}
        {renderStatus(
          modelStatus,
          "Waiting for updates from model",
          "Received JSON data from model"
        )}
        {renderStatus(
          databaseStatus,
          "Waiting to send data to the database",
          "Data sent to the database successfully"
        )}
      </div>
      {imageStatus === "captured" &&
      modelStatus === "received" &&
      databaseStatus === "sent" ? (
        <button
          className="checkDatabaseButton"
          onClick={handleCheckDatabaseClick}
        >
          Check Database
        </button>
      ) : null}
    </div>
  );
}
