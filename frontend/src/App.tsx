import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Herosection />
      <Footer />
      <Cart />
    </div>
  );
};

export default App;
