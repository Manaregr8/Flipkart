import React from "react";

export default function Output({ image }) {
  return (
    <div>
      {image ? <img src={image} alt="Captured Output" /> : <p>No image captured yet</p>}
    </div>
  );
}
