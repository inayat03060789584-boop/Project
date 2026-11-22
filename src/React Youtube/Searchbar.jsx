
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="input-box">
        <input type="text" placeholder="Search" />

        <select className="search-options">
          <option>Taarak Mehta</option>
          <option>CID</option>
          <option>CIF</option>
          <option>Geo News</option>
          <option>ARY News</option>
          <option>Film</option>
          <option>GTA VI Gameplay</option>
          <option>Bollywood Movie</option>
          <option>Hollywood Movie</option>
          <option>Shorts</option>
          <option>Mr. Patlu</option>
          <option>Raj Butt</option>
        </select>

        <i className="fa-solid fa-magnifying-glass" id="opps"></i>
      </div>

      <i className="fa-solid fa-microphone"></i>
    </div>
  );
}
