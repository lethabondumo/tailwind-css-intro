import { useState } from "react";
import "./App.css";

// https://images.unsplash.com/photo-1601237638950-cf0c4c46c37d

const URL_IMG_URL = `https://i.pravatar.cc/300?img=`;

function App() {
  const [avatar, setAvatar] = useState();

  const randNum = Math.floor(Math.random() * 36);

  const handlSetAvatar = () => {
    setAvatar(randNum);
  };

  return (
    <div className="app">
      <header>
        <h1>Welcome to the Tailwind CSS Intro!</h1>
      </header>
      <div className="container">
        <div>
          <button className="btn btn-primary" onClick={handlSetAvatar}>
            I&apos;m feeling lucky
          </button>
        </div>
        <div className="card">
          {/* <img src="https://images.unsplash.com/photo-1601237638950-cf0c4c46c37d" /> */}
          <img src={`${URL_IMG_URL}${avatar}`} />
        </div>
      </div>
    </div>
  );
}

export default App;
