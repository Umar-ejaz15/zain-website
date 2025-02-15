import About from "../Components/About";
import About2 from "../Components/About2";
import Main from "../Components/Main";
import Help from "../Components/Help";
import Navigation from "../Components/Navigation";

const Page1 = () => {
  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "var(--dark1)", color: "var(--dark3)" }}
    >
      <div className="container mx-auto overflow-hidden">
        <Navigation />
        <Main />
        <About/>
        <About2/>
        <Help/>
        
      </div>
    </div>
  );
};

export default Page1;
