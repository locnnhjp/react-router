import { Link, useLocation } from "react-router-dom";

function Home() {
    const {state} = useLocation();
    return(
        <div>
            <h3>Email: {state.email}</h3>
            <h3>Password: {state.password}</h3>
            <Link to="/login">Back to login</Link>
        </div>
    )
}

export default Home;
