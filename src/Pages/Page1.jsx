import About from "../Components/About";
import About2 from "../Components/About2";
import Main from "../Components/Main";
import Help from "../Components/Help";
import Navigation from "../Components/Navigation";
import Tweaking from "../Components/Tweaking";
import DigitalSucces from "../Components/DigitalSucces";
import Works from "../Components/Works";
import Whyme from "../Components/Whyme";

const Page1 = () => {
  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "var(--dark1)", color: "var(--dark3)" }}
    >
      <div className="">
        <div className="container  mx-auto overflow-hidden">
          <Navigation />
          <Main />
          <About />
          <About2 />
          <Help />
          <Tweaking />
          <DigitalSucces />
        </div>
        <Works />
        <div className="container mx-auto">
          <Whyme/>
        </div>
      </div>
    </div>
  );
};

export default Page1;
