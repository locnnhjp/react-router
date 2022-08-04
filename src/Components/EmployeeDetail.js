import { Link, useLocation } from "react-router-dom";

function EmployeeDetail() {
    let {state} = useLocation();
    return (
        <div>
            <h3>ID: {state.id}</h3>
            <h3>Name: {state.name}</h3>
            <h3>Age: {state.age}</h3>
        </div>
    )
}

export default EmployeeDetail;