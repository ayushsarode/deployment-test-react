import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Mybtn = () => {
  return <button>Click here, dear!</button>;
};

const user = {
  name: "Ayush Sarodey",
  imageURL:
    "https://avatars.githubusercontent.com/u/72145248?s=400&u=589c2138fb0b83370fe67563c1dc0f96953e786f&v=4",
  imageSize: 200,
};

export default function App() {
  return (
    <>
      <div>
        <h1>Section J is amazing!!!</h1>
        <Mybtn />

        <div>
          <h3>{user.name}</h3>
          <img
            src={user.imageURL}
            style={{
              width: user.imageSize,
              height: user.imageSize,
            }}
          />
        </div>


        
      </div>
    </>
  );
}
