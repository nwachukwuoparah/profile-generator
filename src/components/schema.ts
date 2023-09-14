import * as yup from "yup"


export const loginSchema = yup
    .object({
        email: yup.string().required().email(),
        password: yup.string().required()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
                "Password must be at least 8 characters long uppercase letter and one special character (!@#$%^&*)."
            ),
    })
    .required()

export const signupSchema = yup
    .object({
        profilePicture: yup.mixed()
            .test({
                name: "required",
                message: "Image is requried",
                test: (value: any) => value?.length > 0
            }),
        fullName: yup.string().required()
            .matches(
                /^[A-Za-z ]+$/,
                "Full name should not contain any special characters"
            ),
        email: yup.string().required().email(),
        password: yup.string().required()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/,
                "Password must be at least 8 characters long uppercase letter and one special character (!@#$%^&*)."
            ),
        stack: yup.string().required(),
    })
    .required()