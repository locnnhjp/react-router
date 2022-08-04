import { useLocation, useNavigate } from "react-router-dom";


const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

function Employee() {
    const {state} = useLocation();
    const navigate = useNavigate();

    const handleDetail = (e) => {
        console.log(e.id);
        navigate(`/employee/${e.id}`, {state: {
            id: e.id,
            name: e.name,
            age: e.age
        }});
    }
    return(
        <div>
            <h3>Email: {state.email}</h3>
            <h3>Password: {state.password}</h3>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th></th>
                </tr>
                {employees.map((e) => (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td><button onClick={() => handleDetail(e)}>Detail</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Employee;