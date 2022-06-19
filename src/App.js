import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  useLocation,
} from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AnimatedRoute from "./AnimatedRoute";

function App() {
  return (
    <div className="App" data-test="APP">
      <BrowserRouter>
        <AnimatedRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
