import { Link, Outlet} from "react-router-dom";
function Home() {
    return (
        <div>
            <main>
                <h2>Welcome to the homepage!</h2>
            </main>
            <div>
                <nav>
                    <Link to="/invoices">Invoices</Link> | {" "}
                    <Link to="/expenses">Expenses</Link> | {" "}
                    <Link to="/about">About</Link>
                    <hr />
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;