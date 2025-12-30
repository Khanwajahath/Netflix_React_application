import "./header.css";
import netflix from "../../../public/NetflixImg/netflix_Logo.png";

export default function Header() {
  return (
    <div className="pageheader">
      <img src={netflix}></img>

      <div className="headerbtns">
        <select className="input-group">
          <option>Hindi</option>
          <option>English</option>
        </select>
        <button className="p-1 fs-6 form-select">Sign in</button>
      </div>
    </div>
  );
}
