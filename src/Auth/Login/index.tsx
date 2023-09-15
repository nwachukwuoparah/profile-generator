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
import Toste from "../../components/Toste/toste";
import { useEffect, useState } from "react";


const Login = () => {
    const navigate = useNavigate()
    const [toste, setToste] = useState<boolean>(false)
    const inputData = [
        {
            name: "email",
            type: "text",
            inputType: "text",
            placeholder: "Email",
            icon: "/sms.svg"
        },
        {
            name: "password",
            type: "text",
            inputType: "password",
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
        data,
        error,
        isLoading,
        mutate,
    } = useMutation(["compliance"], login, {
        onSuccess: async (data: any) => {
            localStorage.setItem("token", data?.data.token)
            setToste(true)
            setTimeout(() => {
                navigate("/profile");
            }, 1000)
        },
        onError: (err: any) => {
            console.log(err?.response?.data?.message)
            setToste(true)
        }
    });

    useEffect(() => {
        setTimeout(() => {
            if (toste === true)
                setToste(false)
        }, 3000)
    }, [error])


    const onSubmit: SubmitHandler<IFormInput> = (data) => mutate(data)
    return (
        <div className="login">
            <img src="/ThecurveLogo.svg" className="logo" />
            <Toste suscess={data?.data.message} error={error?.response?.data?.message} toste={toste} top="150px" />
            <div className="login-contain">
                <p>Log In</p>
                <div className="login-input-wrap">
                    {inputData.map((i) => (<Input {...i} register={register} errors={errors} />))}
                    <Button disabled={isLoading} style={{ marginTop: 15, opacity: isLoading && 0.5 }} isLoading={isLoading} handleClick={handleSubmit(onSubmit)} type="filled" children="Login" />
                </div>
                <span>Don’t have an account?
                    <h6 onClick={() => navigate("/signup")}>Sign Up</h6>
                </span>
            </div>
        </div>
    )
};

export default Login;
