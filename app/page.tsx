import Navbar from "./components/navbar";
import HomePage from "./home/page";
import BottomBar from "./components/BottomBar";

//Around line 900 of reference html starts

export default function Home() {
  return (
    <div className="">
      <HomePage/>
      <BottomBar/>
    </div>
  );
}
