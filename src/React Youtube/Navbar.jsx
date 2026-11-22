import Rightside from "./Rightside";
import Searchbar from "./Searchbar";


import './Navbar.css';
export default function Navbar() {
  return (
    <>
     <nav>
      <div className="navbar">
        <div className="menu">
       <button className="menu-icon">
        ☰
      </button>
          <img src="https://static.vecteezy.com/system/resources/previews/016/629/896/non_2x/youtube-logo-on-black-background-free-vector.jpg"></img>
        </div>
        <div>
          <Searchbar/>
        </div>

        <div>
          <Rightside/>
        </div>
      </div>
     </nav>
    </>
  );
}