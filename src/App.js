import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contract from "./Components/Contract";
import { Link, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contract">Contract</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contract" element={<Contract />} />
            </Routes>
        </div>
    );
}

export default App;
