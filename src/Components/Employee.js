import { useLocation } from "react-router-dom";

function Employee() {
    const {state} = useLocation();

    return(
        <div>
            <h3>Email: {state.email}</h3>
            <h3>Password: {state.password}</h3>
        </div>
    )
}

export default Employee;