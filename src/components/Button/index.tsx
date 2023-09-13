
import "./button.css"
import { buttonType } from "../type.check";

const Button = ({ handleClick, children, type }: buttonType) => {
    switch (type) {
        case "filled":
            return (
                <button className="button" onClick={handleClick}> {children}</button >
            )
        case "out-line":
            return (
                <button className="button-outline" onClick={handleClick}> {children}</button >
            )
        default:
            return null
    }
};

export default Button;
