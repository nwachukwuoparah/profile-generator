import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { IFormInput } from "../../components/type.check";
import './signup.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signupSchema } from "../../components/schema";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../components/Api/mutate";
import { useEffect } from "react";
const Signup = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<any>(
        {
            resolver: yupResolver(signupSchema)
        }
    )

    const {
        data,
        error,
        isLoading,
        mutate,
    } = useMutation(["compliance"], signUp, {
        onSuccess: async (data) => {
            navigate("/");
        },
        onError: async (error) => {
        },
    });

    useEffect(() => {
        console.log(data)
        console.log(error)
        console.log(isLoading)
    }, [data, error, isLoading])
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
            name: "stack",
            type: "select",
            placeholder: "",
            icon: ""
        },
    ]
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const { profilePicture, ...others } = data
        console.log({ ...others, profilePicture: profilePicture?.[0] })
        mutate({ ...others, profilePicture: profilePicture?.[0] })
    }


    return (
        <div className="signup">
            <div className="signup-contain">
                <p>Sign Up</p>
                <label>
                    <div className={errors?.["image"] ? "signup-image-contain-error" : "signup-image-contain "}>
                        <input hidden type="file" {...register("profilePicture")} />
                        <img src="/userbold.svg" />
                    </div>
                </label>
                {errors?.["profilePicture"] && <span
                    style={{
                        marginTop: -20,
                        marginBottom: 20,
                        color: "red",
                        fontSize: 14,
                        textAlign: "center"
                    }}
                >{`${errors?.["profilePicture"]?.message}`}</span>}

                <div className="signup-input-wrap">
                    {inputData.map((i) => (<Input errors={errors} {...i} register={register} />))}
                    <Button style={{ marginTop: 15 }} isLoading={isLoading} handleClick={handleSubmit(onSubmit)} type="filled" children="Create my account" />
                </div>
                <span>Already have an account?
                    <h6 onClick={() => navigate("/")}>Login</h6>
                </span>
            </div>
        </div>
    )
};

export default Signup;
