import "./trending.css";
import one from "../../../public/NetflixImg/one.webp";
import two from "../../../public/NetflixImg/two.webp";
import three from "../../../public/NetflixImg/three.webp";
import four from "../../../public/NetflixImg/four.webp";
import five from "../../../public/NetflixImg/five.webp";
import six from "../../../public/NetflixImg/six.webp";
import seven from "../../../public/NetflixImg/seven.webp";
import eight from "../../../public/NetflixImg/eight.webp";
import nine from "../../../public/NetflixImg/nine.webp";
import ten from "../../../public/NetflixImg/ten.webp";

export default function TrendingNow() {
  const images = [one, two, three, four, five, six, seven, eight, nine, ten];

  function makeImages(images) {
    return images.map((imgSrc, index) => (
      <img src={imgSrc} alt={`Trending ${index + 1}`} />
    ));
  }
  function moveright() {
    const maindiv = document.querySelector(".rightbtn");
    const curr = document.querySelector(".image_container");
    curr.style.transform = "translateX(0px)";

    maindiv.removeChild(document.querySelector(".moverightbtn"));

    const leftbtn = document.createElement("button");
    leftbtn.innerText = "<";
    leftbtn.className = "moveleftbtn";
    leftbtn.addEventListener("click", () => {
      moveleft();
    });
    document.querySelector(".leftbtn").appendChild(leftbtn);
  }
  function moveleft() {
    const maindiv = document.querySelector(".leftbtn");
    const curr = document.querySelector(".image_container");
    curr.style.transform = "translateX(-900px)";

    maindiv.removeChild(document.querySelector(".moveleftbtn"));

    const rightbtn = document.createElement("button");
    rightbtn.innerText = ">";
    rightbtn.className = "moverightbtn";
    rightbtn.addEventListener("click", () => {
      moveright();
    });
    document.querySelector(".rightbtn").appendChild(rightbtn);
  }
  return (
    <div className="main">
      <div className="leftbtn">
        <button onClick={() => moveleft()} className="moveleftbtn">
          {"<"}
        </button>
      </div>
      <div className="trendingnow">
        <div className="image_container">{makeImages(images)}</div>
      </div>
      <div className="rightbtn"></div>
    </div>
  );
}
