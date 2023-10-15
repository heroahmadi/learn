import axios from "axios";
import React, {useState} from "react"; 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = {username: username, password: password};
        axios.post(`http://localhost:3001/auth/login`, data).then((resp) => {
            console.log(data);
        });
    };
    return (
        <div>
            <label>Username: </label>
            <input 
                onChange={(event) => {setUsername(event.target.value)}}
                value={username}
            />

            <label>Password: </label>
            <input 
                type="password"
                onChange={(event) => {setPassword(event.target.value)}}
                value={password}
            />

            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;