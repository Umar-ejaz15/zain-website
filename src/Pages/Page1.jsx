import About from "../Components/About";
import Main from "../Components/Main";
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
        
      </div>
    </div>
  );
};

export default Page1;
