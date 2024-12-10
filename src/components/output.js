/*{image ? <img src={image} alt="Captured Output" /> : <p>No image captured yet</p>}*/
import React, { useState } from "react";
import "../styles/outputStyles.css";

export default function Output({ image, modelResponse, databaseResponse }) {
  const [imageStatus, setImageStatus] = useState("waiting");
  const [modelStatus, setModelStatus] = useState("waiting");
  const [databaseStatus, setDatabaseStatus] = useState("waiting");

  // Simulate updates to statuses
  React.useEffect(() => {
    if (image) setImageStatus("captured");
  }, [image]);

  React.useEffect(() => {
    if (modelResponse) setModelStatus("received");
  }, [modelResponse]);

  React.useEffect(() => {
    if (databaseResponse) setDatabaseStatus("sent");
  }, [databaseResponse]);

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
          onClick={() => window.open("/database", "_blank")}
        >
          Check Database
        </button>
      ) : null}
    </div>
  );
}
