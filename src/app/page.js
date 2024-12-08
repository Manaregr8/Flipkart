import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/container";
import "@/styles/home.css";
export default function Home() {


  return (
    <div className="containerNew" >
      <Container/>
      <p style={{marginTop:'20px', textAlign:'center'}}>This Project is Under Development. Dont forget to show some love!</p>
    </div>
  );
}
