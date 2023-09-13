import { inputType } from "../type.check"
import './input.css'
const Input = ({ type, placeholder, name, icon }: inputType) => {
    switch (type) {
        case "text":
            return (
                <div className="input-wrap">
                    <img src={icon} className="input-image" />
                    <input type="text" className="input-field" placeholder={placeholder} />
                </div>
            )
        case "select":
            return (
                <select className="input-wrap">
                    <option>Stack</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                </select>
            )
        default:
            return null
    }
}

export default Input