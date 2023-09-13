// import React from "react"
import Input from "../../components/Input";
import './login.css'
// import { inputType } from "../../components/type.check";
const Login = () => {

    return (
        <div className="LoginMain">
            <h3>Log in</h3>
            <Input type="text" placeholder='Email' />
            <Input type="select" placeholder={""} />
        </div>
    )
};

export default Login;
