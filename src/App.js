import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cindy from "./components/CindyClawford";
import ElTaco from "./components/ElTaco";
import MissPurrfect from "./components/MissPurrfect";
import Gwumpy from "./components/Gwumpy";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div className="cards__wrapper">
          <Cindy />
          <ElTaco />
          <MissPurrfect />
          <Gwumpy />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
