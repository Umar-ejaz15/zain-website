import Page1 from "./Pages/Page1";
import "./index.css";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Page1 />
    </>
  );
}

export default App;
