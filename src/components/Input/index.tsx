import { useState } from "react";
import { inputType } from "../type.check"
import './input.css'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Input = ({ type, inputType, placeholder, name, icon, register, errors }: inputType) => {

    const [toggle, setToggle] = useState<boolean>(false)

    switch (type) {
        case "text":
            return (
                <>
                    <div className="input-wrap" style={{ border: errors?.[name] && "1px solid red" }}>
                        <img src={icon} className="input-image" />
                        <input type={toggle ? "text" : inputType} className="input-field" {...register(name)} placeholder={placeholder} />
                        {inputType === "password" && (!toggle ? <BsFillEyeSlashFill color="grey" fontSize={25} onClick={() => setToggle(!toggle)} /> :
                            <BsFillEyeFill fontSize={25} color="grey" onClick={() => setToggle(!toggle)} />)}
                    </div>
                    <div style={{ lineHeight: 1.2, color: "red", fontSize: 14, marginTop:5}}>{errors?.[name]?.message}</div>
                </>
            )
        case "select":
            return (
                <>
                    <select className="input-wrap" {...register(name)} style={{ border: errors?.[name] && "1px solid red" }}>
                        <option value="">Stack</option>
                        <option value="Frontend Development">Front-end Trainee</option>
                        <option value="Backend Development">Back-end Trainee</option>
                    </select>
                    <div style={{ lineHeight: 2, color: "red", fontSize: 14 }}>{errors?.[name]?.message}</div>
                </>
            )
        default:
            return null
    }
}

export default Input