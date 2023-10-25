import React, {useState} from "react";
import TextEntry from "./TextEntry";

const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = e => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className="Login">
            <h3>Sign Up</h3>
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
                <h4>First Name</h4>
                <TextEntry
                    updateText={handleChange}
                    textValue={formData.firstName}
                    textType="text"
                    textClass="Login-firstName"
                    placeholderText="First Name"
                    name="firstName"/>
                <h4>Last Name</h4>
                <TextEntry
                    updateText={handleChange}
                    textValue={formData.lastName}
                    textType="text"
                    textClass="Login-lastName"
                    placeholderText="Last Name"
                    name="lastName"/>
                <h4>Email</h4>
                <TextEntry
                    updateText={handleChange}
                    textValue={formData.email}
                    textType="email"
                    textClass="Login-email"
                    placeholderText="Email"
                    name="email"/>
            </form>
        </div>
    );
}

export default Signup;