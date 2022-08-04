import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Employee from "./Components/Employee";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="employee" element={<Employee />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
