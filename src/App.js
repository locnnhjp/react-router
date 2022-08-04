import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Expenses from "./Components/Expenses";
import Invoices from "./Components/Invoices";
import Invoice from "./Components/Invoice";
function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router</h1>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={
                      <main>
                        <p>Hello, let's Invoices or Expenses to continue</p>
                      </main>
                    } />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="invoices/:invoiceId" element={<Invoice />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="*" element={
                  <main>
                    <p>There's nothing here!</p>
                  </main>
                } />
            </Routes>
        </div>
    );
}

export default App;
