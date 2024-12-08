"use client";
import Image from "next/image";
import "@/styles/container.css";
import ImageCapture from "@/components/imageCapture";
import Output from "@/components/output";
import React, { useState } from "react";

export default function Home() {
  const [capturedImage, setCapturedImage] = useState(null);

  return (
    <main className="containerMain">
      <ImageCapture setImage={setCapturedImage} />
      <Output image={capturedImage} />
    </main>
  );
}
