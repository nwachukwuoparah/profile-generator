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
import Toste from "../../components/Toste/toste";
import { useEffect, useState } from "react";
const Signup = () => {
    const navigate = useNavigate()
    const [toste, setToste] = useState<boolean>(false)
    const [image, setImage] = useState<any>(null);
    const [active, setActive] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<any>(
        {
            resolver: yupResolver(signupSchema)
        }
    )

    const {
        error,
        data,
        isLoading,
        mutate,
    } = useMutation(["compliance"], signUp, {
        onSuccess: async (data: any) => {
            if (data)
                setToste(true)
            setTimeout(() => {
                navigate("/");
            }, 1000)

        },
        onError: (err: any) => {
            setToste(true)
            console.log(err?.response?.data?.message)
        }
    });

    const inputData = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Fullname",
            inputType: "text",
            icon: "/user.svg"
        },
        {
            name: "email",
            type: "text",
            placeholder: "Email",
            inputType: "text",
            icon: "/sms.svg"
        },
        {
            name: "password",
            type: "text",
            placeholder: "Password",
            icon: "/lock.svg",
            inputType: "password",
        },
        {
            name: "stack",
            type: "select",
            placeholder: "",
            icon: "",
            inputType: "text",
        },
    ]

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const { profilePicture, ...others } = data
        mutate({ ...others, profilePicture: profilePicture?.[0] })
    }

    useEffect(() => {
        setTimeout(() => {
            if (toste === true)
                setToste(false)
        }, 3000)

        if (watch("profilePicture") !== null && watch("profilePicture")[0] !== undefined) {
            const blob = new Blob([watch("profilePicture")?.[0]], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob);
            setImage(url);
        }
    }, [error, watch("profilePicture")])

    useEffect(() => {
        if (
            image &&
            watch("fullName")
            && watch("email")
            && watch("password")
            && watch("stack")) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [
        image,
        watch("fullName"),
        , watch("email")
        , watch("password")
        , watch("stack")
    ])

    return (
        <div className="signup">
            <img src="/ThecurveLogo.svg" className="logo" />
            <Toste suscess={data?.data?.message} error={error?.response?.data?.message} toste={toste} top="55px" />
            <div className="signup-contain">
                <p>Sign Up</p>
                <label>
                    <div className={errors?.["profilePicture"] ? "signup-image-contain-error" : "signup-image-contain "}>
                        <input hidden type="file" {...register("profilePicture")} />
                        {image ? <img src={image} style={{ position: "relative", top: 8, width: "100%", objectFit: "contain" }} /> : <img src="/userbold.svg" style={{ width: "100%", objectFit: "contain" }} />}
                    </div>
                    <img src="/camera.svg" style={{ position: "relative", top: -45, left: 65, cursor: "pointer" }} />
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
                    {inputData.map((i, index) => (<Input key={index} {...i} register={register} errors={errors} />))}
                    <Button disabled={!active ? true : isLoading} style={{ marginTop: 15, opacity: !active ? 0.6 : (isLoading && 0.6) }} isLoading={isLoading} handleClick={handleSubmit(onSubmit)} type="filled" children="Create my account" />
                </div>
                <span>Already have an account?
                    <h6 onClick={() => navigate("/")}>Login</h6>
                </span>
            </div>
        </div>
    )
};

export default Signup;
