import Image from "next/image";
import styles from "../styles/navbarStyles.css";

export default function Home() {
  return (
   <nav>
    <img className="logoNavbar" src="./logoFlip.png" />
    <a href="https://github.com/Manaregr8/Flipkart" className="buttonNavbar">Github Repo</a>
   </nav>
  );
}
