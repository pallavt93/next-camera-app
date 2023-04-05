import { useState, useRef } from "react";
import styles from '../styles/Home.module.css'
import Webcam from "react-webcam";


export default function Home() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: "user"
  };

  const handleSubmit = () =>{

  }


  return (
    <div className={styles.container}>
      <div className={styles.camera}>
        <Webcam videoConstraints={videoConstraints} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}
