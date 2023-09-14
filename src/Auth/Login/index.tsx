import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm, SubmitHandler } from "react-hook-form"
import './login.css'
import { IFormInput } from "../../components/type.check";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../components/schema";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../components/Api/mutate";


const Login = () => {
    const navigate = useNavigate()

    const inputData = [
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
        }
    ]

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>({
        resolver: yupResolver(loginSchema),
    })

    const {
        isLoading,
        mutate,
    } = useMutation(["compliance"], login, {
        onSuccess: async (data: any) => {
            localStorage.setItem("token", data?.data.token)
            setTimeout(() => {
                navigate("/profile");
            }, 500)
        },
    });


    const onSubmit: SubmitHandler<IFormInput> = (data) => mutate(data)

    return (
        <div className="login">
            <div className="login-contain">
                <p>Log In</p>
                <div className="login-input-wrap">
                    {inputData.map((i) => (<Input {...i} register={register} errors={errors} />))}
                    <Button style={{ marginTop: 15 }} isLoading={isLoading} handleClick={handleSubmit(onSubmit)} type="filled" children="Login" />
                </div>
                <span>Don’t have an account?
                    <h6 onClick={() => navigate("/signup")}>Sign Up</h6>
                </span>
            </div>
        </div>
    )
};

export default Login;
