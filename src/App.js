import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytic from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <div >
      <Navbar></Navbar>
       <Hero></Hero>
        <Analytic></Analytic>
        <Newsletter ></Newsletter>
        <Card></Card>
        <Footer></Footer>
    </div>
  );
}

export default App;
