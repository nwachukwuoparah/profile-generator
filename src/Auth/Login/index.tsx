// import React from "react"
import Button from "../../components/Button";
import Input from "../../components/Input";
import './login.css'
// import { inputType } from "../../components/type.check";
const Login = () => {
    const handleClick = () => {
        console.log('clicked')
    }
    const inputData = [{
        name: "email",
        type: "text",
        placeholder: "Email",
        icon: "/sms.svg"
    },
    {
        name: "select",
        type: "select",
        placeholder: "",
        icon: ""
    },
    ]
    return (
        <div className="LoginForm">
            <div className="LoginMain">
                <h3>Log in</h3>
                {inputData.map((i) => (<Input {...i} />))}
                <Button children="Log in" type="filled" handleClick={handleClick} />
                <div className="DecisionDiv">
                    <p className="DontHaveAccount">Don't have an account?  </p>
                    <b className="SignUpDecision">Sign Up</b>
                </div>
            </div>
        </div>
    )
};

export default Login;
