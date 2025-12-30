import "./App.css";
import Header from "./components/pageHeader/header";
import MiddleBox from "./components/middleBox/MiddleBox";
import TrendingNow from "./components/trendingNow/trending";
import AccodianBox from "./components/Accordian/Accordian";
import Reasons from "./components/reasons/Reasons";
import Card from "./components/card/Card";
function App() {
  return (
    <>
    <div className="cover">
      <div className="shade">
      <Header></Header>
      <MiddleBox></MiddleBox>
      <TrendingNow></TrendingNow>
      </div>
    </div>
    <div className="bg-black">
    <Reasons>
    </Reasons>
    <AccodianBox></AccodianBox>
      </div>
      </>
  );
}

export default App;
