import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const [form, setForm] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleLogin() {
        navigate("/home", {
            state: { email: form.email, password: form.password },
        });
    }

    return (
        <div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
