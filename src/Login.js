import React, {useState} from "react";
import TextEntry from "./TextEntry";
import "./Login.css"

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className="Login">
            <h3>Login</h3>
            <form>
            <h4>Username</h4>
                <TextEntry 
                    updateText={handleChange}
                    textValue={formData.username}
                    textType="text"
                    textClass="Login-username"
                    placeholderText="Username"
                    name="username"/>
                <h4>Password</h4>
                <TextEntry
                    updateText={handleChange}
                    textValue={formData.password}
                    textType="password"
                    textClass="Login-password"
                    placeholderText="Password"
                    name="password"/>
            </form>
        </div>
    );
}

export default Login;