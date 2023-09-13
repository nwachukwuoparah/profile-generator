import { inputType } from "../type.check"
import './input.css'
const Input = ({ type, placeholder }: inputType) => {
    switch (type) {
        case "text":
            return (
                <div className="InputMainWrap">
                    <div className="InputWrap">
                        <img src="/user.svg" className="InputImage"/>
                        <input type="text" className="InputField" placeholder={placeholder} />
                    </div>
                </div>
            )
        case "select":
            return (
                <select className="InputSelectWrap">
                    <option className="inputSelect">Stack</option>
                    <option className="inputSelect">Frontend Development</option>
                    <option className="inputSelect">Backend Development</option>
                </select>
            )
        default:
            return null
    }
}

export default Input