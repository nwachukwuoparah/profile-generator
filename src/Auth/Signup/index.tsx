import Button from "../../components/Button";
import Input from "../../components/Input";
import './signup.css'
const Signup = () => {

    const inputData = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Fullname",
            icon: "/user.svg"
        },
        {
            name: "email",
            type: "text",
            placeholder: "Email",
            icon: "/sms.svg"
        },
        {
            name: "password",
            type: "text",
            placeholder: "Password",
            icon: "/lock.svg"
        },
        {
            name: "select",
            type: "select",
            placeholder: "",
            icon: ""
        },
    ]


    return (
        <div className="sign-up">

            <div className="sign-up-contain">
                <p>Sign Up</p>
                <div className="signup-image-contain">
                    <img src="/userbold.svg" />
                </div>
                <div className="sign-up-input-wrap">
                    {inputData.map((i) => (<Input {...i} />))}
                    <Button style={{ marginTop: 4 }} handleClick={() => { }} type="filled" children="Create my account" />
                </div>
                <span>
                    <p>Already have an account? </p>
                    <h6>Login</h6>
                </span>
            </div>
        </div>
    )
};

export default Signup;
