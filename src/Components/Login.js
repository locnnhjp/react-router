import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    function handleChange(e) {
        setForm({
            ...form, [e.target.name]: e.target.name
        });
    }

    function handleLogin() {
        navigate("/employee", {state: {email: form.email, password: form.password}});
    }

    return (
        <div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;