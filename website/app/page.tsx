import Image from "next/image";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AboutUS from "./pages/AboutUsPage";
import MembersPage from "./pages/MembersPage";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/Events/EventsPage";
import ContactUS from "./pages/ContactUSPage";
import JoinUs from "./pages/JoinUS";
import BottomBar from "./components/BottomBar";

//Around line 900 of reference html starts

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HomePage/>
      <AboutUS/>
      <MembersPage/>
      <ProjectsPage/>
      <EventsPage/>
      <ContactUS/>
      <JoinUs/>
      <BottomBar/>
    </div>
  );
}
