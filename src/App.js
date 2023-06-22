import "./App.css";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Slider from "./Component/Slider/Slider";
import Vristual from "./Component/Vritusal/Vristual";
import Product from "./Component/Product/Product";
import Rate from "./Component/Rate/Rate";
import Review from "./Component/Review/Review";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <Slider />
    <Vristual />
    <Product />
    <Rate />
    <Review />
    <Footer />
    </div>
  );
}

export default App;
