import Image from "next/image";
import styles from "../styles/navbarStyles.css";

export default function Home() {
  return (
   <nav>
    <img className="logoNavbar" src="./logoFlip.png" />
    <button className="buttonNavbar">Github</button>
   </nav>
  );
}
