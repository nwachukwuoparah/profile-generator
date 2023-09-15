import "./edit-profile.css"
// import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { IFormInput } from "../components/type.check";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { editSchema } from "../components/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "../components/Api/mutate";
import { useEffect, useState } from "react";
const Edit_profile = ({ edit, value }: { edit: () => void, value: any }) => {
    const queryClient = useQueryClient();
    // const navigate = useNavigate()
    const [toste, setToste] = useState<boolean>(false)
    const [image, setImage] = useState<any>(null);
    const [active, setActive] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors }, watch } = useForm<any>(
        {
            resolver: yupResolver(editSchema),
        }
    )

    const {
        error,
        isLoading,
        mutate,
    } = useMutation(["edit-profile"], editProfile, {
        onSuccess: async (data: any) => {
            if (data)
                // setToste(true)
            queryClient.invalidateQueries({ queryKey: ["getUser"] });
            edit()
        },
        onError: (err: any) => {
            setToste(true)
            console.log(err?.response?.data?.message)
            queryClient.invalidateQueries({ queryKey: ["getUser"] });
        }
    });



    const inputData = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Fullname",
            inputType: "text",
            icon: "/user.svg",
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
        mutate({ ...others, profilePicture: profilePicture?.[0], email: value?.email })
    }

    useEffect(() => {
        setTimeout(() => {
            if (toste === true)
                setToste(false)
        }, 3000)

        if (watch("profilePicture") !== null && watch("profilePicture")?.[0] !== undefined) {
            const blob = new Blob([watch("profilePicture")?.[0]], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob);
            setImage(url);
        }
    }, [error, watch("profilePicture")])

    useEffect(() => {
        if (
            image &&
            watch("fullName")
            && watch("stack")) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [
        image,
        watch("fullName"),
        , watch("stack")
    ])

    return (
        <div className="edit-profile">
            <div className="edit-profile-contain" >
                <p>Sign Up</p>
                <label>
                    <div className={errors?.["profilePicture"] ? "edit-profile-image-contain-error" : "edit-profile-image-contain"}>
                        <input hidden type="file" {...register("profilePicture")} />
                        {image ? <img src={image} style={{ position: "relative", top: 8, width: "100%", objectFit: "contain" }} />
                            :
                            <img src={"/userbold.svg"} style={{ width: "100%", objectFit: "contain" }} />
                        }
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

                <div className="edit-profile-input-wrap">
                    {inputData.map((i, index) => (<Input key={index} {...i} register={register} errors={errors} />))}
                    <Button disabled={!active ? true : isLoading} style={{ marginTop: 15, opacity: !active ? 0.6 : (isLoading && 0.6) }} isLoading={isLoading} handleClick={handleSubmit(onSubmit)} type="filled" children="Save" />
                    <Button disabled={!active ? true : isLoading} style={{ border: "1.5px solid #023047", color: "#023047", fontWeight: 500, opacity: !active ? 0.6 : (isLoading && 0.6) }} isLoading={isLoading} handleClick={edit} type="out-line" children="Back" />
                </div>
            </div>
        </div>
    )
};

export default Edit_profile;
