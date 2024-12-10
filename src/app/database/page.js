import Image from "next/image";
import Database from "@/components/databaseComponent";
export default function DatabaseMain() {


  return (
    <div className="containerNew" >
        <Database/>
      <p style={{marginTop:'20px', textAlign:'center'}}>This Project is Under Development. Dont forget to show some love!</p>
    </div>
  );
}
